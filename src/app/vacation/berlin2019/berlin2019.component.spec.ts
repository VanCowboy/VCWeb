import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Berlin2019Component } from './berlin2019.component';

describe('Berlin2019Component', () => {
  let component: Berlin2019Component;
  let fixture: ComponentFixture<Berlin2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Berlin2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Berlin2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
