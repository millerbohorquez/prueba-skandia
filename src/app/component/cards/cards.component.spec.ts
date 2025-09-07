import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/component/cards/cards.component.spec.ts
import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsComponent);
========
import { SlidebarComponent } from './slidebar.component';

describe('SlidebarComponent', () => {
  let component: SlidebarComponent;
  let fixture: ComponentFixture<SlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidebarComponent);
>>>>>>>> 3a6db11fd64012ac57e18b10fc2475ef21de246a:src/app/component/slidebar/slidebar.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
