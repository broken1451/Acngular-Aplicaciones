import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

// Servicios
import { HeroesService } from 'src/app/services/heroes.service';

// Interfaz
import { HeroesInterface } from '../../models/heroesInterface';


// rutas con parametros
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any;
  @Input() i: any;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
    this.heroe = {};
    this.heroeSeleccionado =  new EventEmitter();
  }



  ngOnInit() {
  }


  verHeroe() {
    this.router.navigate(['/heroe', this.i]);
    console.log('i del input tiene como valor: ', this.i);
    // this.heroeSeleccionado.emit(this.i);
    // console.log('this.heroeSeleccionado.emit(this.i); como valor: ', this.heroeSeleccionado.emit(this.i));
  }

}
