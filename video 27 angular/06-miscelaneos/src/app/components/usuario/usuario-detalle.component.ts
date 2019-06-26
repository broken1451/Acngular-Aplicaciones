import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <div class="container">
    <p>
    usuario-detalle works!
  </p>
    </div>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.parent.params.subscribe((parametrosUrl: any) => {
      console.log('Ruta HIJA parametrosUrl UsuarioDetalle');
      console.log('parametrosUrl: ', parametrosUrl);
    });

  }

  ngOnInit() {
  }

}
