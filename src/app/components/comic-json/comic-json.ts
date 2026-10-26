import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comic';
@Component({
  selector: 'app-comic-json',
  standalone: false,
  styleUrl: './comic-json.css',
  templateUrl: './comic-json.html',
})
export class ComicJson {
  public arrayComics: Array<Comic>
  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = [];
  }
  cargarComics(): void {
    //Estamos en public
    let path = "./assets/comics.json"
    fetch(path).then(response => response.json()).then((data: any[]) => {
      for (const c of data) {
        let comic: Comic = new Comic(c.nombre, c.descripcion, c.imagen);
        this.arrayComics.push(comic)
        console.log(comic);
      }
      this._cdr.detectChanges();
    })
  }
}
