import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros',
  standalone: false,
  styleUrl: './padre-numeros.css',
  templateUrl: './padre-numeros.html',
})
export class PadreNumeros {
  public lista: number[] = [];
  public mensaje = '';
  public suma = 0;

  generarNumeros(): void {
    this.lista = [];
    for (let i = 1; i <= 4; i++) {
      let n = Math.floor(Math.random() * 120) + 1;
      this.lista.push(n);
    }
  }

  sumar(n: number): void {
    this.suma += n;
    this.mensaje = 'La suma es ' + this.suma;
  }
}
