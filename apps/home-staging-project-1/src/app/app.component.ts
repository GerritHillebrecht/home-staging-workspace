import { Component, OnInit, inject } from '@angular/core';
import { BasketService } from './core/service/state';

@Component({
  selector: 'hsp-1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly basketService = inject(BasketService);

  ngOnInit(): void {
    const basket = localStorage.getItem('basket');
    this.basketService.basket.update(() => (basket ? JSON.parse(basket) : []));
  }
}
