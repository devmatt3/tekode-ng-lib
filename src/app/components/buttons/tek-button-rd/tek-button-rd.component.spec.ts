import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekButtonRdComponent } from './tek-button-rd.component';

describe('TekButtonRdComponent', () => {
  let component: TekButtonRdComponent;
  let fixture: ComponentFixture<TekButtonRdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekButtonRdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekButtonRdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
