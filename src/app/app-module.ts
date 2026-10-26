import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaProductos } from './components/lista-productos/lista-productos';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PadreCoche } from './components/padre-coche/padre-coche';
import { HijoCoche } from './components/hijo-coche/hijo-coche';
import { PadreDeportes } from './components/padre-deportes/padre-deportes';
import { DeportesComponent } from './components/deportes-component/deportes-component';
import { PadreNumeros } from './components/padre-numeros/padre-numeros';
import { HijoNumeros } from './components/hijo-numeros/hijo-numeros';
import { ComicSimple } from './components/comic-simple/comic-simple';
import { ComicJson } from './components/comic-json/comic-json';
import { ComicExcel } from './components/comic-excel/comic-excel';

@NgModule({
  declarations: [
    App,
    ListaProductos,
    HomeComponent,
    MenuComponent,
    PadreCoche,
    HijoCoche,
    PadreDeportes,
    DeportesComponent,
    PadreNumeros,
    HijoNumeros,
    ComicSimple,
    ComicJson,
    ComicExcel
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
