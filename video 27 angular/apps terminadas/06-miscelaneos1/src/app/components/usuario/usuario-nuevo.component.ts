import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
<div class="container">
<p>
usuario-nuevo works!
</p>
</div>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.parent.params.subscribe((parametrosUrl: any) => {
      console.log('Ruta HIJA parametrosUrl UsuarioNuevo');
      console.log('parametrosUrl: ', parametrosUrl);
    });

  }

  ngOnInit() {
  }

}
