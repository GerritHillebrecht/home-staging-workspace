import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMarqueeSliderComponent } from '../../shared/ui/components/slider/horizontal-marquee-slider/horizontal-marquee-slider.component';
import { SplittedContentComponent } from '../../shared/ui/components/splitted-content/splitted-content.component';
import { MatDividerModule } from '@angular/material/divider';
import { HeroAvatarComponent } from '../../shared/ui/components/avatar/hero-avatar/hero-avatar.component';
import { BasketService } from '../../core/service/state';

import { faker } from '@faker-js/faker';

@Component({
  selector: 'hsp-1-landing',
  standalone: true,
  imports: [
    CommonModule,
    HorizontalMarqueeSliderComponent,
    SplittedContentComponent,
    MatDividerModule,
    HeroAvatarComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export default class LandingComponent {
  private readonly basketService = inject(BasketService);

  addItemToBasket(): void {
    this.basketService.addItem({
      title: faker.commerce.productName(),
      skuu: faker.commerce.isbn(),
      quantity: Math.round(Math.random() * 10),
      price: Math.random() * 30 + 20,
      category: faker.commerce.department(),
      imageUrl: faker.image.urlLoremFlickr({ category: 'business' }),
      description: faker.commerce.productDescription(),
      id: faker.commerce.isbn(),
    });
  }
}
