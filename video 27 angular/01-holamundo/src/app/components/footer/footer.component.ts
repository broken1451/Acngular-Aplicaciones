import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public nombre: string;
  public anio: any;

  constructor() {
    this.nombre = 'Adrian Bravo';
    this.anio = new Date().getFullYear();
  }

  ngOnInit() {
  }

}


