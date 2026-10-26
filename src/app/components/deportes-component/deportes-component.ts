import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deportes-component',
  standalone: false,
  styleUrl: './deportes-component.css',
  templateUrl: './deportes-component.html',
})
export class DeportesComponent {
  @Input() sport!: string;
  public mensaje!: string;
  @Output() favSelectPadre: EventEmitter<any> = new EventEmitter();
  @Output() quitarFav: EventEmitter<any> = new EventEmitter();
  mostrarFavorito() {
    this.favSelectPadre.emit(this.sport);
  }
  quitarFavorito() {
    this.quitarFav.emit();
  }
}
