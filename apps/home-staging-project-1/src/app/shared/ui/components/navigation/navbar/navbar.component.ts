/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBagShopping,
  faBarsProgress,
  faChevronRight,
  faCircleHalfStroke,
  faCreditCard,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { BasketService } from 'apps/home-staging-project-1/src/app/core/service/state';
import { RouterModule } from '@angular/router';
import {
  Theme,
  ThemeService,
} from 'apps/home-staging-project-1/src/app/core/service/theme';
import { MatDividerModule } from '@angular/material/divider';
import {
  NavbarRoundedOverlayComponent,
  NavLink,
} from '@shared-ui/navigation/navbar-rounded-overlay';

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
    MatTooltipModule,
    MatDividerModule,
    RouterModule,
    NavbarRoundedOverlayComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private readonly basketService = inject(BasketService);
  private readonly themeService = inject(ThemeService);

  protected readonly basket = this.basketService.basket;

  protected readonly basketIcon = signal<IconDefinition>(faBagShopping);
  protected readonly arrowIcon = signal<IconDefinition>(faChevronRight);
  protected readonly checkOutIcon = signal<IconDefinition>(faCreditCard);
  protected readonly toggleDarkModeIcon =
    signal<IconDefinition>(faCircleHalfStroke);
  protected readonly darkModeIcon = signal<IconDefinition>(faMoon);
  protected readonly lightModeIcon = signal<IconDefinition>(faSun);
  protected readonly systemSettingsIcon =
    signal<IconDefinition>(faBarsProgress);

  protected readonly routes = signal<Route[]>([
    { label: 'Find Talent', path: '' },
    { label: 'Store', path: '/store' },
    { label: 'Inspiration', path: '/inspiration' },
    { label: 'Learn Design', path: '/design' },
  ]);

  protected emptyBasket(): void {
    this.basketService.emptyBasket();
  }

  protected setTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }

  protected setThemeToSystemPreference(): void {
    this.themeService.setThemeToSystemPreference.set(true);
    this.themeService.setTheme(this.themeService.getSystemPreference());
    this.themeService.setThemeToSystemPreference.set(false);
  }
}
