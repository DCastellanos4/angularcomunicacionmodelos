import { Component } from '@angular/core';
import { HijoCoche } from '../hijo-coche/hijo-coche';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coche',
  standalone: false,
  styleUrl: './padre-coche.css',
  templateUrl: './padre-coche.html',
})
export class PadreCoche {
  public arrayCoches: Array<Coche>;
  constructor() {
    this.arrayCoches = [
      new Coche("Ford", "Mustang", 0, 50),
      new Coche("Volkswagen", "Escarabajo", 0, 10),
      new Coche("Lamborgini", "Diablo", 0, 70)
    ]
  }

}
