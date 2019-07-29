import { Component, OnInit } from '@angular/core';

// Router
import { ActivatedRoute } from '@angular/router';

// Servicios
import { PeliService } from '../../services/peli.service';


{}


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  public pelicula: any;
  public regresarA: string;
  public parametroBusqueda: string;
  public loading: boolean;

  constructor( private activatedRoute: ActivatedRoute,
               private peliService: PeliService ) {

      this.loading = false;
      this.regresarA = '';

      this.activatedRoute.params.subscribe( (parametrosUrl: any) => {

          this.loading = true;
          this.parametroBusqueda = '';
          this.regresarA = parametrosUrl['pag'];
          console.log('los parametrosUrl: ', parametrosUrl);

          if (parametrosUrl['parametroBusqueda']) {
            this.parametroBusqueda = parametrosUrl['parametroBusqueda'];
          }

          this.peliService.getPelicula(parametrosUrl['id']).subscribe( (resPelicula: any) => {
            setTimeout(() => {
              this.pelicula = resPelicula;
              this.loading = false;
              console.log('resPelicula: ', resPelicula);
            }, 3000);
          });
      });

  }

  ngOnInit() {
  }

}
