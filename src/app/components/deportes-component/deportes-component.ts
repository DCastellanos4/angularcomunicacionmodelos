import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deportes-component',
  standalone: false,
  styleUrl: './deportes-component.css',
  templateUrl: './deportes-component.html',
})
export class DeportesComponent {
  @Input() sport!: string;
  @Output() favSelectPadre = new EventEmitter<string>();
  @Output() quitarFav = new EventEmitter<void>();

  mostrarFavorito(): void {
    this.favSelectPadre.emit(this.sport);
  }

  quitarFavorito(): void {
    this.quitarFav.emit();
  }
}
