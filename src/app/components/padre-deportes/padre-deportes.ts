import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-padre-deportes',
  standalone: false,
  styleUrl: './padre-deportes.css',
  templateUrl: './padre-deportes.html',
})
export class PadreDeportes {
  public deportes: Array<string>;
  public mensaje!: string;
  //Un metodo para enviar al hijo
  favSelectPadre(event: any): void {
    console.log("Deporte: " + event);
    this.mensaje = "Su deporte favorito es: " + event;
  }
  quitarFavPadre(deporte: any): void {
    this.mensaje = "";
  }
  constructor() {
    this.deportes = ["Curling", "Dardos", "Canicas", "Beisbol", "Voley", "Ping-Pong"]
  }
}
