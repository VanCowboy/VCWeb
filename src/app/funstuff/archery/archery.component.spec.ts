import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcheryComponent } from './archery.component';

describe('ArcheryComponent', () => {
  let component: ArcheryComponent;
  let fixture: ComponentFixture<ArcheryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcheryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcheryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
