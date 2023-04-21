import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diagramm03Component } from './diagramm03.component';

describe('Diagramm03Component', () => {
  let component: Diagramm03Component;
  let fixture: ComponentFixture<Diagramm03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Diagramm03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diagramm03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
