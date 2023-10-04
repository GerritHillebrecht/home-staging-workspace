/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBagShopping,
  faChevronRight,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import { BasketService } from 'apps/home-staging-project-1/src/app/core/service/state';
import { RouterModule } from '@angular/router';

interface Route {
  label: string;
  path: string;
}

@Component({
  selector: 'hsp-1-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    FontAwesomeModule,
    MatMenuModule,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private readonly basketService = inject(BasketService);

  protected readonly basket = this.basketService.basket;
  protected readonly basketCount = signal<number>(1);

  protected readonly basketIcon = signal<IconDefinition>(faBagShopping);
  protected readonly arrowIcon = signal<IconDefinition>(faChevronRight);
  protected readonly checkOutIcon = signal<IconDefinition>(faCreditCard);

  protected readonly routes = signal<Route[]>([
    { label: 'Find Talent', path: '' },
    { label: 'Store', path: '/store' },
    { label: 'Inspiration', path: '/inspiration' },
    { label: 'Learn Design', path: '/design' },
    { label: 'Jobs', path: '/jobs' },
    { label: 'Go Pro', path: '/pro' },
  ]);

  emptyBasket(): void {
    this.basketService.emptyBasket();
  }
}
