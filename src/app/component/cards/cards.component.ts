import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CardsService } from '../../services/cards.service';
import { CardItem } from '../../models/card.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cards',
  imports: [CommonModule ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
cards: CardItem[] = [];
  loading = false;
  error = '';

  // slider state
  slidesPerView = 3;
  currentIndex = 0;
  maxIndex = 0;

  private isBrowser: boolean;

  constructor(
    private cardsService: CardsService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    // Solo acceder a window en browser
    if (this.isBrowser) {
      this.updateSlidesPerView();
    }
    this.loadCards();
  }

  // HostListener seguirá registrado pero solo hará algo en browser
  @HostListener('window:resize')
  onResize() {
    if (!this.isBrowser) return;
    const old = this.slidesPerView;
    this.updateSlidesPerView();
    if (old !== this.slidesPerView) {
      this.recalcLimits();
    }
  }

  private updateSlidesPerView() {
    // Protección doble: isBrowser + typeof window
    if (!this.isBrowser || typeof window === 'undefined') {
      this.slidesPerView = 3;
      return;
    }

    const w = window.innerWidth;
    if (w < 576) this.slidesPerView = 1;
    else if (w < 992) this.slidesPerView = 2;
    else this.slidesPerView = 3;
  }

  private recalcLimits() {
    this.maxIndex = Math.max(0, (this.cards.length - this.slidesPerView));
    if (this.currentIndex > this.maxIndex) this.currentIndex = this.maxIndex;
  }

  loadCards() {
    this.loading = true;
    this.cardsService.getCards().subscribe({
      next: (data: any) => {
        this.cards = Array.isArray(data) ? data : (data?.listCard ?? []);
        this.recalcLimits();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando tarjetas', err);
        this.error = 'No se pudieron cargar las tarjetas.';
        this.loading = false;
      }
    });
  }

  next() {
    if (this.currentIndex < this.maxIndex) this.currentIndex++;
  }

  prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

get translatePercent(): number {
  return (this.currentIndex * 100);
}


  isPrevDisabled(): boolean { return this.currentIndex <= 0; }
  isNextDisabled(): boolean { return this.currentIndex >= this.maxIndex; }

  formatCurrency(value: string): string {
    const num = parseInt(value as any, 10) || 0;
    return new Intl.NumberFormat('es-CO', {
      style: 'currency', currency: 'COP', maximumFractionDigits: 0
    }).format(num);
  }
}