import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorizontalMarqueeSliderComponent } from './horizontal-marquee-slider.component';

describe('HorizontalMarqueeSliderComponent', () => {
  let component: HorizontalMarqueeSliderComponent;
  let fixture: ComponentFixture<HorizontalMarqueeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalMarqueeSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalMarqueeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
