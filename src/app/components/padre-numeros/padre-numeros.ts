import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros',
  standalone: false,
  styleUrl: './padre-numeros.css',
  templateUrl: './padre-numeros.html',
})
export class PadreNumeros {
  public lista!: Array<Number>;
  public mensaje!: string;
  public suma: Number;
  constructor() {
    this.suma = 0;
    this.mensaje = ""
  }
  generarNumeros(): void {
    this.lista = [];
    for (let i = 1; i <= 4; i++) {
      let n = Math.floor(Math.random() * 120) + 1;
      this.lista.push(n)
    }
  }
  sumar(n: any): void {
    this.suma = parseInt(this.suma + n);
    this.mensaje = "La suma es " + this.suma
  }
}
