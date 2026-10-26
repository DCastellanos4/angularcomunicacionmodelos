import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { combineLatest } from 'rxjs';
import { compatForm } from '@angular/forms/signals/compat';
import { ListaProductos } from './components/lista-productos/lista-productos';
import { PadreCoche } from './components/padre-coche/padre-coche';
import { HijoCoche } from './components/hijo-coche/hijo-coche';
import { PadreDeportes } from './components/padre-deportes/padre-deportes';
import { PadreNumeros } from './components/padre-numeros/padre-numeros';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "productos", component: ListaProductos },
  { path: "coches", component: PadreCoche },
  { path: "deportes", component: PadreDeportes },
  { path: "numeros", component: PadreNumeros }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
