import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

{}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((parametrosUrl: any) => {
      console.log('Ruta padre parametrosUrl');
      console.log('parametrosUrl: ', parametrosUrl);
    });

  }

  ngOnInit() {
  }

}
