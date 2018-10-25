import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDriveComponent } from './request-drive.component';

describe('RequestDriveComponent', () => {
  let component: RequestDriveComponent;
  let fixture: ComponentFixture<RequestDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
