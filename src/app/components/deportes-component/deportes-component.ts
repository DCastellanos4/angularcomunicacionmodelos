import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deportes-component',
  standalone: false,
  styleUrl: './deportes-component.css',
  templateUrl: './deportes-component.html',
})
export class DeportesComponent {
  @Input() sport!: string;
  public mensaje!: string;
  mostrarFavorito() {
    this.mensaje = "Deporte favorito " + this.sport
  }
  quitarFavorito() {
    this.mensaje = ""
  }
}
