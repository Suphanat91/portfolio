import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

// Fades an element up the first time it scrolls into view.
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class Reveal {
  constructor() {
    const el = inject(ElementRef<HTMLElement>).nativeElement;
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          el.classList.add('in');
          io.disconnect();
        },
        { rootMargin: '0px 0px -10% 0px' },
      );
      io.observe(el);
      destroyRef.onDestroy(() => io.disconnect());
    });
  }
}
