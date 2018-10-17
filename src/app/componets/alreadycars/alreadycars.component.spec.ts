import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadycarsComponent } from './alreadycars.component';

describe('AlreadycarsComponent', () => {
  let component: AlreadycarsComponent;
  let fixture: ComponentFixture<AlreadycarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadycarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadycarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
