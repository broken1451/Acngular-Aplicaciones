import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroes.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  public heroe: HeroeModel;

  constructor() {
    this.heroe = new HeroeModel();
  }

  ngOnInit() {
  }



  guardar(formulario: NgForm) {
    console.log('El formulario: ', formulario);
    console.log('this.heroes: ', this.heroe);

    if (formulario.invalid) {
        console.log('formulario Invalido');
        return;
    }

  }










}
