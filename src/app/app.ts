import { Component, DestroyRef, afterNextRender, effect, inject, signal } from '@angular/core';
import { experience, profile, skills } from './data/profile';
import { Gallery } from './gallery/gallery';
import { I18n, ui } from './i18n';
import { Projects } from './projects/projects';
import { Radar } from './radar/radar';
import { Reveal } from './reveal';

type Theme = 'light' | 'dark';

function savedTheme(): Theme | null {
  try {
    const t = localStorage.getItem('theme');
    return t === 'light' || t === 'dark' ? t : null;
  } catch {
    return null;
  }
}

@Component({
  imports: [Projects, Gallery, Radar, Reveal],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  host: { '(window:scroll)': 'onScroll()', '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class App {
  protected readonly profile = profile;
  protected readonly experience = experience;
  protected readonly skills = skills;
  protected readonly year = new Date().getFullYear();

  protected readonly i18n = inject(I18n);
  protected readonly lang = this.i18n.lang;
  protected readonly t = this.i18n.t;
  protected readonly ui = ui;

  protected readonly nav = [
    { id: 'now', label: ui.nav.now },
    { id: 'work', label: ui.nav.work },
    { id: 'experience', label: ui.nav.experience },
    { id: 'projects', label: ui.nav.projects },
    { id: 'skills', label: ui.nav.skills },
    { id: 'contact', label: ui.nav.contact },
  ];
  protected readonly activeSection = signal('');
  protected readonly progress = signal(0);
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly theme = signal<Theme>(
    savedTheme() ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  );

  constructor() {
    effect(() => {
      const t = this.theme();
      document.documentElement.dataset['theme'] = t;
      try {
        localStorage.setItem('theme', t);
      } catch {}
    });

    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      // Highlight the nav link for the section in the middle of the screen.
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) if (e.isIntersecting) this.activeSection.set(e.target.id);
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));
      destroyRef.onDestroy(() => io.disconnect());
    });
  }

  protected onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    this.progress.set(max > 0 ? scrollY / max : 0);
    this.scrolled.set(scrollY > 8);
  }

  protected toggleTheme() {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
}
