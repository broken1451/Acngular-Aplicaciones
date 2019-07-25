import { Component, OnInit } from '@angular/core';
import { PeliService } from '../../services/peli.service';

{}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public populares: any;
  public popularesNinos: any;
  public cartelera: any;

  constructor(private peliService: PeliService ) {
    // this.peliService.getPopulares().subscribe( (res: any) => {
    //   this.peliculas = [];
    //   this.peliculas = res.results;
    //   console.log(res);
    //   console.log(this.peliculas);
    // });

    // this.peliService.buscarPelicula('Capitana-Marvel').subscribe();

    this.peliService.getCartelera().subscribe( (res: any) => {
      this.cartelera = [];
      this.cartelera = res.results;
      console.log(res);
      console.log(this.cartelera);
    });

    this.peliService.getPopulares().subscribe( (res: any) => {
      this.populares = [];
      this.populares = res.results;
      console.log(res);
      console.log(this.populares);
    });

    this.peliService.getPopularesNinos().subscribe( (res: any) => {
      this.popularesNinos = [];
      this.popularesNinos = res.results;
      console.log(res);
      console.log(this.popularesNinos);
    });

   }

  ngOnInit() {
  }

}


