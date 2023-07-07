import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsadminComponent } from './kidsadmin.component';

describe('KidsadminComponent', () => {
  let component: KidsadminComponent;
  let fixture: ComponentFixture<KidsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
