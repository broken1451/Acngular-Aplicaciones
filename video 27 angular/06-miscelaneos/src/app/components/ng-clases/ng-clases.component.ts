import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-clases',
  templateUrl: './ng-clases.component.html',
  styles: []
})
export class NgClasesComponent implements OnInit {

  public alerta: string;
  public propiedades: Object;
  public loading: boolean;

  constructor() {

    this.alerta = 'alert-danger';
    this.loading = false;
    this.propiedades = {
      danger: false,
    };
  }

  ngOnInit() {

  }

  ejecutar() {

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
