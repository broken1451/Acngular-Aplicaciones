import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  // @input('Nombre de la propiedad que quiero poner' data que viene por fuera) dentro del componente que se llame;
  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor() {
  }

  ngOnInit() {
  }

}
