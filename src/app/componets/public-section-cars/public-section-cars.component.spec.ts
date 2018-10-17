import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSectionCarsComponent } from './public-section-cars.component';

describe('PublicSectionCarsComponent', () => {
  let component: PublicSectionCarsComponent;
  let fixture: ComponentFixture<PublicSectionCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSectionCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSectionCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
