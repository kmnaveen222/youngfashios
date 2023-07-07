import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderdetailsComponent } from './oderdetails.component';

describe('OderdetailsComponent', () => {
  let component: OderdetailsComponent;
  let fixture: ComponentFixture<OderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
