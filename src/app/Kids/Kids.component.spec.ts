/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KidsComponent } from './Kids.component';

describe('KidsComponent', () => {
  let component: KidsComponent;
  let fixture: ComponentFixture<KidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
