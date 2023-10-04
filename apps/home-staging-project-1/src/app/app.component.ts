import { Component, OnInit, effect, inject } from '@angular/core';
import { BasketService } from './core/service/state';
import { fromEvent } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ThemeService } from './core/service/theme';

@Component({
  selector: 'hsp-1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly basketService = inject(BasketService);
  private readonly themeService = inject(ThemeService);

  private darkModeChange = toSignal(
    fromEvent<MediaQueryListEvent>(
      this.themeService.darkModeMediaQuery,
      'change'
    )
  );

  private themeChangeEffect = effect(
    () => {
      const darkModeChangeFromSystem = this.darkModeChange();
      if (this.themeService.setThemeToSystemPreference()) {
        this.themeService.setTheme(
          darkModeChangeFromSystem?.matches ? 'dark' : 'light'
        );
      }
    },
    {
      allowSignalWrites: true,
    }
  );

  ngOnInit(): void {
    const basket = localStorage.getItem('basket');
    this.basketService.basket.update(() => (basket ? JSON.parse(basket) : []));

    if (this.themeService.setThemeToSystemPreference()) {
      this.themeService.setTheme(this.themeService.getSystemPreference());
    }

    if (!this.themeService.setThemeToSystemPreference()) {
      this.themeService.setTheme(this.themeService.currentTheme());
    }
  }
}
