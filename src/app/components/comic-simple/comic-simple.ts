import { Component } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic-simple',
  standalone: false,
  styleUrl: './comic-simple.css',
  templateUrl: './comic-simple.html',
})
export class ComicSimple {
  public arrayComics: Array<Comic>
  constructor() {
    this.arrayComics = [];
  }
  cargarComics(): void {
    this.arrayComics = [
      new Comic(
        "Spiderman",
        "Hombre araña",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg"
      ),
      new Comic(
        "Wolverine",
        "Lobezno",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "Yo soy Groot",
        "https://lanocheamericana.net/wp-content/uploads/2021/11/guardianes-de-la-galaxia-15-90-panini.jpg"
      ),
      new Comic(
        "Avengers",
        "Los Vengadores",
        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg"
      ),
      new Comic(
        "Spawn",
        "Todd MacFarlane",
        "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png"
      )
    ];
  }
}
