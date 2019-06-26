import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public frase: any;
  public mostrar: boolean;
  public heroes: string[];

  constructor() {
   this.mostrar = true;
   this.heroes = ['Spiderman', 'Thor', 'IronMan', 'Hulk', 'Pantera Negra'];
   this.frase = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben parker'
   };
  }

  ngOnInit() {
  }

  muestra() {
    this.mostrar = !this.mostrar;
    console.log('click');
  }

}
