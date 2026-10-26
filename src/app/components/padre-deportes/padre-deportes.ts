import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  standalone: false,
  styleUrl: './padre-deportes.css',
  templateUrl: './padre-deportes.html',
})
export class PadreDeportes {
  public deportes = ['Curling', 'Dardos', 'Canicas', 'Beisbol', 'Voley', 'Ping-Pong'];
  public mensaje = '';

  //Un metodo para enviar al hijo
  favSelectPadre(deporte: string): void {
    console.log('Deporte: ' + deporte);
    this.mensaje = 'Su deporte favorito es: ' + deporte;
  }

  quitarFavPadre(): void {
    this.mensaje = '';
  }
}
