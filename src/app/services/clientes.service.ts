import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';     //  Esto me va a permitir hacer las peticiones al Backend
import { Cliente} from '../clases/Cliente';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  URL: string = 'http://localhost:8080/clientes/listar';

  constructor( private http: HttpClient) { }


  getClientes() : Observable<Cliente[]>{

    console.log('hola desde cliente.services');

    return this.http.get<Cliente[]>(this.URL);
  }
}
