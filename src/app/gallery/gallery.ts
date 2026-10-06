import { Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { CATEGORIES, Category, GalleryItem, gallery } from '../data/gallery';

type Filter = Category | 'all';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  protected readonly items = gallery;
  protected readonly tabs = CATEGORIES.filter((c) => this.items.some((i) => i.category === c.id));
  protected readonly filter = signal<Filter>('all');
  protected readonly expanded = signal(false);

  protected readonly counts = computed(() => {
    const counts = new Map<Filter, number>([['all', this.items.length]]);
    for (const item of this.items) counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
    return counts;
  });

  /** Everything in the current tab, in order. The lightbox pages through this list. */
  protected readonly visible = computed(() => {
    const f = this.filter();
    return f === 'all' ? this.items : this.items.filter((i) => i.category === f);
  });

  protected readonly featured = computed(() =>
    this.filter() === 'all' ? (this.items.find((i) => i.featured) ?? null) : null,
  );

  protected readonly grid = computed(() => this.visible().filter((i) => i !== this.featured()));

  // Long tabs start collapsed behind a "Show all" button.
  protected readonly collapsible = computed(() => this.grid().length > 8);

  // Lightbox
  private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('lightbox');
  private readonly thumbs = viewChild<ElementRef<HTMLElement>>('thumbs');
  protected readonly openIndex = signal<number | null>(null);
  protected readonly current = computed(() => {
    const i = this.openIndex();
    return i === null ? null : (this.visible()[i] ?? null);
  });
  private swipeX: number | null = null;

  protected setFilter(f: Filter) {
    this.filter.set(f);
    this.expanded.set(false);
  }

  protected label(id: Category) {
    return CATEGORIES.find((c) => c.id === id)?.label ?? id;
  }

  protected src(item: GalleryItem, small = false) {
    return `work/${item.category}/${item.file}${small ? '-sm' : ''}.jpg`;
  }

  protected ratio(item: GalleryItem) {
    return item.width / item.height;
  }

  protected open(item: GalleryItem) {
    this.openIndex.set(this.visible().indexOf(item));
    this.dialog()?.nativeElement.showModal();
    this.centerThumb();
  }

  protected close() {
    this.dialog()?.nativeElement.close();
  }

  protected go(index: number) {
    const total = this.visible().length;
    this.openIndex.set((index + total) % total);
    this.centerThumb();
  }

  protected step(delta: number) {
    const i = this.openIndex();
    if (i !== null) this.go(i + delta);
  }

  protected onKey(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') this.step(1);
    if (event.key === 'ArrowLeft') this.step(-1);
  }

  protected swipeStart(event: PointerEvent) {
    this.swipeX = event.clientX;
  }

  protected swipeEnd(event: PointerEvent) {
    if (this.swipeX === null) return;
    const dx = event.clientX - this.swipeX;
    this.swipeX = null;
    if (Math.abs(dx) > 50) this.step(dx < 0 ? 1 : -1);
  }

  private centerThumb() {
    setTimeout(() => {
      this.thumbs()
        ?.nativeElement.querySelector('.on')
        ?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    });
  }
}
