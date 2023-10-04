import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroAvatarComponent } from './hero-avatar.component';

describe('HeroAvatarComponent', () => {
  let component: HeroAvatarComponent;
  let fixture: ComponentFixture<HeroAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
