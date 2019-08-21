import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ftbragg2016Component } from './ftbragg2016.component';

describe('Ftbragg2016Component', () => {
  let component: Ftbragg2016Component;
  let fixture: ComponentFixture<Ftbragg2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ftbragg2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ftbragg2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
