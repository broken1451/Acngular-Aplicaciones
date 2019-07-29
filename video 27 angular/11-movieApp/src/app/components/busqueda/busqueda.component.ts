import { Component, OnInit } from '@angular/core';

// Servicio
import { PeliService } from '../../services/peli.service';

// Routers
import { ActivatedRoute } from '@angular/router';

{}

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  public buscar: string;
  public pelicula: any[];
  public loading: boolean;

  constructor(public peliService: PeliService, private activatedRoute: ActivatedRoute) {
    this.buscar = '';
    this.pelicula = [];
    this.loading = false;

    this.activatedRoute.params.subscribe( (parametrosUrl: any) => {
      console.log('los parametrosUrl: ', parametrosUrl);
      if (parametrosUrl['textoInput']) {
        this.buscar = parametrosUrl['textoInput'];
        this.buscarPeli();
      }

    });


  }

  ngOnInit() {
  }


  buscarPeli() {
    if (this.buscar.length === 0) {
      return;
    }

    this.peliService.buscarPelicula(this.buscar).subscribe( (res: any) => {
      this.loading = true;
      setTimeout(() => {
        this.pelicula = res.results;
        this.loading = false;
        console.log(res);
        console.log('this.loading: ', this.loading);
        console.log(this.pelicula);
      }, 3000);
    });

  }

}
