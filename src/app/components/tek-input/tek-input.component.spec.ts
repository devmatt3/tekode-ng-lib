import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekInputComponent } from './tek-input.component';

describe('TekInputComponent', () => {
  let component: TekInputComponent;
  let fixture: ComponentFixture<TekInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
