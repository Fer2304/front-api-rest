import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPedidosComponent } from './chart-pedidos.component';

describe('ChartPedidosComponent', () => {
  let component: ChartPedidosComponent;
  let fixture: ComponentFixture<ChartPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
