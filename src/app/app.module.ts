import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarComponent } from './components/listar/listar.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';
import { HttpClientModule} from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';


//  Enrutamiento. Desde aqui vamos a crear las rutas para que aparezcan los diferentes componentes que nosotros queramos
const routes: Routes = [
  {path: '', component: ListarComponent},
  {path: 'agregar', component: ClientesFormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NavegacionComponent,
    ClientesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
