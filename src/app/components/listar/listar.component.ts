import { Component, OnInit } from '@angular/core';
import { ClientesService} from '../../services/clientes.service';
import { Cliente} from '../../clases/Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clientesService: ClientesService) { console.log('hola otra v');}

  ngOnInit(): void {
    console.log('hola');
    this.clientesService.getClientes().subscribe(
      //res => console.log(res)

      res => this.clientes = res
    )
    console.log('hola otra vez');
  }

}
