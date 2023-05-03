/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MensComponent } from './Mens.component';

describe('MensComponent', () => {
  let component: MensComponent;
  let fixture: ComponentFixture<MensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
