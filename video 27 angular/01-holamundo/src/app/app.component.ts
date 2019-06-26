import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public nombre: string;
  public apellido: string;

    constructor() {
      this.nombre = 'Adrian';
      this.apellido = 'Bravo';
    }

}
