import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoMenuComponent } from './topo-menu.component';

describe('TopoMenuComponent', () => {
  let component: TopoMenuComponent;
  let fixture: ComponentFixture<TopoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
