import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p style="font-size:10px;">
      Hola mundo  style ... esta en una etiqueta
    </p>

    <p [ngStyle]="{'font-size': '15px'}">
      Hola mundo  [ngStyle] ... esta en una etiqueta
    </p>

    <p [style.fontSize.px]="tamano">
      Hola mundo  [style.fontSize.px] ... esta en una etiqueta
    </p>

  <button  class="btn btn-outline-primary" (click)="tamano = tamano + 5">
    <i class="fa fa-plus"></i>
  </button>

  <button  class="btn btn-outline-primary" (click)="tamano = tamano - 5">
    <i class="fa fa-minus"></i>
  </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  public tamano: number;
  constructor() {
    this.tamano = 10;
  }


  ngOnInit() {
  }

}
