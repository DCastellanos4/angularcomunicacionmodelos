import { Component,Input } from '@angular/core';
import { Coche } from '../../models/coche';
@Component({
  selector: 'app-hijo-coche',
  standalone: false,
  styleUrl: './hijo-coche.css',
  templateUrl: './hijo-coche.html',
})
export class HijoCoche {
  @Input() car!: Coche;
  public listaCoches!: Array<Coche>
  constructor() {
    //this.car = new Coche("Pontiac", "Firebird", 0, 25);
  }
  acelerarCoche(): void {
    this.car.velocidad += this.car.aceleracion
  }
  frenarCoches(): void {
    this.car.velocidad -= this.car.aceleracion
    if (this.car.velocidad < 0) {
      this.car.velocidad = 0;
    }
  }
}
