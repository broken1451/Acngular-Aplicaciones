import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
<div class="container">
<p>
usuario-editar works!
</p>
</div>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.parent.params.subscribe((parametrosUrl: any) => {
      console.log('Ruta HIJA parametrosUrl UsuarioEditar');
      console.log('parametrosUrl: ', parametrosUrl);
    });

  }

  ngOnInit() {
  }

}
