import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensadminComponent } from './womensadmin.component';

describe('WomensadminComponent', () => {
  let component: WomensadminComponent;
  let fixture: ComponentFixture<WomensadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
