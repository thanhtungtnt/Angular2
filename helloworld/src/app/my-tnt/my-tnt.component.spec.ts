/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyTNTComponent } from './my-tnt.component';

describe('MyTNTComponent', () => {
  let component: MyTNTComponent;
  let fixture: ComponentFixture<MyTNTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTNTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTNTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
