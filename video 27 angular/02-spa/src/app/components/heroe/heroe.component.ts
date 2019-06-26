import { Component, OnInit } from '@angular/core';

// Servicio
import { HeroesService } from '../../services/heroes.service';

// Parametros por la url
import { ActivatedRoute } from '@angular/router';
{}


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  public heroe: any;
  public imgCasa: any;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {

    this.heroe = {};

    this.activatedRoute.params.subscribe((parametrosUrl) => {

      // console.log('los parametrosUrl son: ', parametrosUrl);
      // console.log('los parametrosUrl son: ', parametrosUrl.id);
      // tslint:disable-next-line:no-string-literal
      this.heroe = this.heroesService.getHeroe(parametrosUrl['id']);
      // tslint:disable-next-line:no-string-literal
      console.log('los parametrosUrl son: ', parametrosUrl['id']);
      console.log(' this.heroe es: ', this.heroe);

      if (this.heroe.casa === 'Marvel') {
        this.imgCasa = 'assets/img/marvel.png';
      } else {
        this.imgCasa = 'assets/img/dc.png';
      }

    });

  }

  ngOnInit() {
  }

}
