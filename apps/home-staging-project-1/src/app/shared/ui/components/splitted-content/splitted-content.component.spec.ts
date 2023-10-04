import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplittedContentComponent } from './splitted-content.component';

describe('SplittedContentComponent', () => {
  let component: SplittedContentComponent;
  let fixture: ComponentFixture<SplittedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplittedContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SplittedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
