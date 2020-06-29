import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoMarcaComponent } from './topo-marca.component';

describe('TopoMarcaComponent', () => {
  let component: TopoMarcaComponent;
  let fixture: ComponentFixture<TopoMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
