import { Component, OnInit } from '@angular/core';

// Servicios
import { HeroesService } from 'src/app/services/heroes.service';

// Interfaz
import { HeroesInterface } from '../../models/heroesInterface';


// rutas con parametros
import { Router } from '@angular/router';


{}


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: HeroesInterface[];

  constructor(private heroesService: HeroesService, private router: Router) {
    console.log('constructor de HeroesComponent listo');
  }

  ngOnInit() {
    console.log('ngOnInit de HeroesComponent listo');
    this.heroes = this.heroesService.getHeroes();
    console.log('this.heroes: ', this.heroes);
  }

  verHeroe(i: number) {
    this.router.navigate(['/heroe', i]);
    console.log('verHeroe el valor es i: ', i);
  }


}
