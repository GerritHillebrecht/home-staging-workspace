import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export interface SliderOptions {
  speed: 'slow' | 'medium' | 'fast';
  direction: 'left' | 'right';
  masked: boolean;
  maxWidth: string;
}

export interface SliderItem {
  path: string;
  type: 'image' | 'video';
  title: string;
  subtitle: string;
  tags: string[];
}

@Component({
  selector: 'hsp-1-horizontal-marquee-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './horizontal-marquee-slider.component.html',
  styleUrls: ['./horizontal-marquee-slider.component.scss'],
})
export class HorizontalMarqueeSliderComponent implements AfterViewInit {
  @ViewChild('scroller')
  scrollerRef!: ElementRef<HTMLDivElement>;

  @ViewChild('scrollerInner')
  scrollerInnerRef!: ElementRef<HTMLUListElement>;

  @Input() set items(items: SliderItem[]) {
    this.sliderItems.set(items);
  }

  @Output()
  addToBasket = new EventEmitter<void>();

  protected readonly addToBasketIcon = signal<IconDefinition>(faCartPlus);

  protected readonly sliderItems = signal<SliderItem[]>([
    {
      path: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'image',
    },
    {
      path: 'assets/video/compressed/stock_1.mp4',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'video',
    },
    {
      path: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'image',
    },
    {
      path: 'assets/video/compressed/stock_2.mp4',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'video',
    },
    {
      path: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'image',
    },
    {
      path: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=60',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'image',
    },
    {
      path: 'assets/video/compressed/stock_3.mp4',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'video',
    },
    {
      path: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=60',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'image',
    },
    {
      path: 'assets/video/compressed/stock_5.mp4',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'video',
    },
    {
      path: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'image',
    },
    {
      path: 'assets/video/compressed/stock_4.mp4',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'video',
    },
    {
      path: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'image',
    },
    {
      path: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'image',
    },
    {
      path: 'assets/video/compressed/stock_6.mp4',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'video',
    },
    {
      path: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'image',
    },
    {
      path: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60',
      title: 'Joseph Jorgensen',
      subtitle: 'CEO of everything',
      tags: ['CEO', 'Founder'],
      type: 'image',
    },
  ]);

  @Input() set options(options: Partial<SliderOptions>) {
    this.sliderOptions.update((value) => ({ ...value, ...options }));
  }

  protected readonly sliderOptions = signal<SliderOptions>({
    speed: 'medium',
    direction: 'left',
    masked: true,
    maxWidth: 'none',
  });

  ngAfterViewInit(): void {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.addAnimation();

      this.scrollerRef.nativeElement.style.setProperty(
        '--max-width',
        this.sliderOptions().maxWidth
      );

      const contentChildren = Array.from(
        this.scrollerInnerRef.nativeElement.children
      ) as HTMLElement[];

      contentChildren.forEach((child: HTMLElement, index: number) => {
        // child.style.width = `${width / this.sliderOptions().visibleItems}px`;
        if (this.sliderItems()[index].type === 'video') {
          const video = child.querySelector('video') as HTMLVideoElement;
          video.muted = true;
          video.autoplay = true;
        }
        const duplicatedChild = child.cloneNode(true) as HTMLElement;

        duplicatedChild.setAttribute('aria-hidden', 'true');
        this.scrollerInnerRef.nativeElement.appendChild(duplicatedChild);
      });
    }
  }

  private addAnimation() {
    this.scrollerRef.nativeElement.setAttribute('data-animated', 'true');
  }
}
