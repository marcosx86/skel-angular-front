import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoLateralComponent } from './conteudo-lateral.component';

describe('ConteudoLateralComponent', () => {
  let component: ConteudoLateralComponent;
  let fixture: ComponentFixture<ConteudoLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
