import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public readonly currentTheme = signal<Theme>('light');
  public readonly setThemeToSystemPreference = signal<boolean>(true);
  public readonly darkModeMediaQuery = window.matchMedia(
    '(prefers-color-scheme: dark)'
  );

  public setTheme(theme: Theme) {
    // Set class dark on html element
    document.documentElement.classList.toggle('dark', theme === 'dark');
    this.currentTheme.set(theme);
  }

  public getSystemPreference(): Theme {
    const isDarkMode = this.darkModeMediaQuery.matches;
    return isDarkMode ? 'dark' : 'light';
  }
}
