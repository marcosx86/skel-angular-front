import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoUsuarioComponent } from './topo-usuario.component';

describe('TopoUsuarioComponent', () => {
  let component: TopoUsuarioComponent;
  let fixture: ComponentFixture<TopoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
