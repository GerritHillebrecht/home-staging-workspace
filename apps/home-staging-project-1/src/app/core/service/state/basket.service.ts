import { Injectable, effect, signal } from '@angular/core';

export type Basket = BasketItem[];

export interface BasketItem {
  title: string;
  skuu: string;
  quantity: number;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  readonly basket = signal<Basket>([]);

  private localStorageEffect = effect(() => {
    if (!this.basket().length) return;
    localStorage.setItem('basket', JSON.stringify(this.basket()));
  });

  addItem(item: BasketItem) {
    this.basket.update((basket) => {
      return [...basket, item];
    });
  }

  emptyBasket() {
    this.basket.update(() => []);
  }
}
