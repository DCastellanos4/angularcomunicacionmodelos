import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-numeros',
  standalone: false,
  styleUrl: './hijo-numeros.css',
  templateUrl: './hijo-numeros.html',
})
export class HijoNumeros {
  @Input() n!: Number;
  @Output() sumar: EventEmitter<any> = new EventEmitter();
  sumarN(): void {
    this.sumar.emit(this.n);
  }
}
