import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Titulo2Component } from './titulo2.component';

describe('Titulo2Component', () => {
  let component: Titulo2Component;
  let fixture: ComponentFixture<Titulo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Titulo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Titulo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
