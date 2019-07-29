import { Component, OnInit } from '@angular/core';

// Modelo
import { Marcador } from '../../models/marcador.class';

{}


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

 public lat: number;
 public lng: number;
 public marcadores: Marcador[];

  constructor() {

    this.marcadores = [];
    this.lat = 51.678418;
    this.lng = 7.809007;

    // const nuevoMarcador = new Marcador( 51.678418, 7.809007 );
    // this.marcadores.push(nuevoMarcador);

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

   }

  ngOnInit() {
  }


  agregarMarcador(evento: any) {
    // const coords: {lat: number, lng: number} = evento.coords;
    const coords = evento.coords;
    const nuevoMarcador = new Marcador( coords.lat, coords.lng );
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    console.log('evento de agregarMarcador():', evento);
  }


  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
