import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';

interface Blip {
  id: string;
  r: number; // 0..1 from center
  theta: number; // radians, 0 = east, clockwise
  drift: number; // radians per second
  alt: number;
  lastHit: number;
}

interface Contact {
  id: string;
  bearing: number;
  range: number;
  alt: number;
}

const SWEEP_PERIOD = 4000; // ms per revolution
const FADE = 3200; // ms a blip stays lit after the sweep passes
const TRAIL = Math.PI / 2.4;

function makeBlips(): Blip[] {
  const ids = ['UAS-3F2A', 'UAS-81C7', 'UAS-0D5E', 'UAS-B49F'];
  return ids.map((id, i) => ({
    id,
    r: 0.3 + 0.15 * i + Math.random() * 0.08,
    theta: Math.random() * Math.PI * 2,
    drift: (Math.random() - 0.5) * 0.06,
    alt: 40 + Math.round(Math.random() * 10) * 10,
    lastHit: -Infinity,
  }));
}

@Component({
  selector: 'app-radar',
  templateUrl: './radar.html',
  styleUrl: './radar.css',
})
export class Radar {
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('scope');
  protected readonly contacts = signal<Contact[]>([]);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => destroyRef.onDestroy(this.start()));
  }

  private start(): () => void {
    const canvas = this.canvas().nativeElement;
    const ctx = canvas.getContext('2d')!;
    const blips = makeBlips();
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let colors = readColors();
    let colorsAt = 0;
    let frame = 0;
    let visible = true;
    let last = performance.now();
    let angle = -Math.PI / 2;

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const size = canvas.clientWidth;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      const size = canvas.clientWidth;
      const c = size / 2;
      const R = c - 18;
      if (now - colorsAt > 500) {
        colors = readColors();
        colorsAt = now;
      }
      ctx.clearRect(0, 0, size, size);

      // Range rings and crosshair
      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 1;
      for (let k = 1; k <= 4; k++) {
        ctx.beginPath();
        ctx.arc(c, c, (R * k) / 4, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(c - R, c);
      ctx.lineTo(c + R, c);
      ctx.moveTo(c, c - R);
      ctx.lineTo(c, c + R);
      ctx.stroke();

      // Bearing ticks every 10 degrees
      for (let d = 0; d < 360; d += 10) {
        const a = (d * Math.PI) / 180 - Math.PI / 2;
        const inner = d % 90 === 0 ? R - 10 : R - 5;
        ctx.beginPath();
        ctx.moveTo(c + Math.cos(a) * inner, c + Math.sin(a) * inner);
        ctx.lineTo(c + Math.cos(a) * R, c + Math.sin(a) * R);
        ctx.stroke();
      }
      ctx.fillStyle = colors.muted;
      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('N', c, 8);
      ctx.fillText('S', c, size - 8);
      ctx.fillText('E', size - 8, c);
      ctx.fillText('W', 8, c);

      // Sweep wedge with fading trail
      const grad = ctx.createConicGradient(angle - TRAIL, c, c);
      grad.addColorStop(0, withAlpha(colors.accent, 0));
      grad.addColorStop(TRAIL / (Math.PI * 2), withAlpha(colors.accent, 0.35));
      grad.addColorStop(TRAIL / (Math.PI * 2) + 0.0001, withAlpha(colors.accent, 0));
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(c, c);
      ctx.arc(c, c, R, angle - TRAIL, angle);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(c, c);
      ctx.lineTo(c + Math.cos(angle) * R, c + Math.sin(angle) * R);
      ctx.stroke();

      // Contacts
      for (const b of blips) {
        const glow = still ? 0.85 : Math.max(0, 1 - (now - b.lastHit) / FADE);
        if (glow <= 0) continue;
        const x = c + Math.cos(b.theta) * b.r * R;
        const y = c + Math.sin(b.theta) * b.r * R;
        const age = (now - b.lastHit) / FADE;
        ctx.strokeStyle = withAlpha(colors.accent, glow * 0.6);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 4 + (still ? 6 : age * 14), 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = withAlpha(colors.accent, glow);
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        if (glow > 0.25) {
          ctx.fillStyle = withAlpha(colors.fg, glow);
          ctx.textAlign = 'left';
          ctx.fillText(b.id, x + 9, y - 7);
        }
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 100);
      last = now;
      const prev = angle;
      angle += (dt / SWEEP_PERIOD) * Math.PI * 2;
      let hit = false;
      for (const b of blips) {
        b.theta += (b.drift * dt) / 1000;
        if (crossed(prev, angle, b.theta)) {
          b.lastHit = now;
          hit = true;
        }
      }
      if (hit) this.publish(blips, now);
      draw(now);
      if (visible) frame = requestAnimationFrame(tick);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (still) draw(performance.now());
    });
    ro.observe(canvas);

    if (still) {
      for (const b of blips) b.lastHit = 0;
      this.publish(blips, 0, true);
      draw(performance.now());
      return () => ro.disconnect();
    }

    const io = new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting && !document.hidden;
      if (visible && !was) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    });
    io.observe(canvas);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
    };
  }

  private publish(blips: Blip[], now: number, all = false) {
    this.contacts.set(
      blips
        .filter((b) => all || now - b.lastHit < FADE)
        .map((b) => ({
          id: b.id,
          bearing: Math.round(((((b.theta + Math.PI / 2) * 180) / Math.PI) % 360 + 360) % 360),
          range: Math.round(b.r * 1500),
          alt: b.alt,
        }))
        .sort((a, b) => a.range - b.range),
    );
  }
}

function crossed(from: number, to: number, target: number) {
  const twoPi = Math.PI * 2;
  const t = (((target - from) % twoPi) + twoPi) % twoPi;
  return t <= to - from;
}

function readColors() {
  const s = getComputedStyle(document.documentElement);
  return {
    accent: s.getPropertyValue('--accent').trim() || '#0f5b78',
    line: s.getPropertyValue('--line').trim() || '#d8dfe4',
    muted: s.getPropertyValue('--muted').trim() || '#56636f',
    fg: s.getPropertyValue('--fg').trim() || '#16202a',
  };
}

function withAlpha(hex: string, alpha: number) {
  const n = parseInt(hex.replace('#', ''), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}
