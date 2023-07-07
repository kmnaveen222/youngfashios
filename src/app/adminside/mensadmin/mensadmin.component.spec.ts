import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensadminComponent } from './mensadmin.component';

describe('MensadminComponent', () => {
  let component: MensadminComponent;
  let fixture: ComponentFixture<MensadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
