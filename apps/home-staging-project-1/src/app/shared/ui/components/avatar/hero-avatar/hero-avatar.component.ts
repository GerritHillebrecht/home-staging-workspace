import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hsp-1-hero-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-avatar.component.html',
  styleUrls: ['./hero-avatar.component.scss'],
})
export class HeroAvatarComponent implements AfterViewInit {
  @ViewChild('avatar')
  avatarRef!: ElementRef<HTMLImageElement>;

  @Input()
  path = 'assets/images/avatar/avatar_1.png';

  @Input()
  alt = 'Avatar';

  @Input()
  animate = true;

  @Input()
  size = '500px';

  ngAfterViewInit(): void {
    this.avatarRef.nativeElement.style.setProperty('--image-size', this.size);
  }
}
