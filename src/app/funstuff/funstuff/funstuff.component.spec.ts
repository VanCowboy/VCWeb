import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunstuffComponent } from './funstuff.component';

describe('FunstuffComponent', () => {
  let component: FunstuffComponent;
  let fixture: ComponentFixture<FunstuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunstuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
