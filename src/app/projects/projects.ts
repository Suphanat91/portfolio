import { Component, computed, signal } from '@angular/core';
import { projects } from '../data/profile';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly all = projects;
  protected readonly tags = ['All', ...new Set(projects.flatMap((p) => p.tags))];
  protected readonly active = signal('All');

  protected readonly visible = computed(() => {
    const tag = this.active();
    return tag === 'All' ? this.all : this.all.filter((p) => p.tags.includes(tag));
  });

  // Moves the card's highlight to follow the pointer.
  protected spot(event: PointerEvent) {
    const card = event.currentTarget as HTMLElement;
    const box = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - box.left}px`);
    card.style.setProperty('--my', `${event.clientY - box.top}px`);
  }
}
