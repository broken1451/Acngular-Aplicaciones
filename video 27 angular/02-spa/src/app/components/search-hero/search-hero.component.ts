import { Component, OnInit } from '@angular/core';

// parametros por url
import { ActivatedRoute, Router } from '@angular/router';

// Servicio
import { HeroesService } from '../../services/heroes.service';
{}



@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss']
})
export class SearchHeroComponent implements OnInit {

  public heroes: any[];
  public termino: any;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((parametrosURL) => {
      // tslint:disable-next-line:no-string-literal
      this.termino = parametrosURL['terminoAbuscar'];
      // tslint:disable-next-line:no-string-literal
      console.log('parametrosURL son: ', parametrosURL['terminoAbuscar']);
      // tslint:disable-next-line:no-string-literal
      this.heroes = this.heroesService.buscaHeroe(parametrosURL['terminoAbuscar']);
      console.log('this.heroes son: ', this.heroes);
      console.log('this.termino son: ', this.termino);
    });
  }

  verHeroe(i: number) {
    this.router.navigate(['/heroe', i]);
    console.log('verHeroe el valor es i: ', i);
  }

}
