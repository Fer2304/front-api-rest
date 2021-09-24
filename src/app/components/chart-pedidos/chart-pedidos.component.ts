import { Component, OnInit } from '@angular/core';

import { ClientesService} from '../../services/clientes.service';
import { Cliente} from '../../clases/Cliente';

@Component({
  selector: 'app-chart-pedidos',
  templateUrl: './chart-pedidos.component.html',
  styleUrls: ['./chart-pedidos.component.css']
})
export class ChartPedidosComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    console.log('Estaos imprimiendo desde char-pedidos.component');
    this.clientesService.getClientes().subscribe(
      res => console.log(res)

    )
  }

}
