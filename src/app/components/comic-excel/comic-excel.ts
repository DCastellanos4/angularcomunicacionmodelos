import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comic';
//importamos la libreria
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-comic-excel',
  standalone: false,
  styleUrl: './comic-excel.css',
  templateUrl: './comic-excel.html',
})
export class ComicExcel {
  public arrayComics: Array<Comic>;

  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = [];
  }

  cargarComics(): void {
    const path = './assets/comics.xlsx';
    fetch(path)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: 'array' });
        const hojaName = workbook.SheetNames[0];
        const hoja = workbook.Sheets[hojaName];
        const data = XLSX.utils.sheet_to_json(hoja);
        this.arrayComics = data.map(
          (c: any) => new Comic(c.titulo, c.descripcion, c.imagen)
        );
        this._cdr.detectChanges()
      });
  }
}
