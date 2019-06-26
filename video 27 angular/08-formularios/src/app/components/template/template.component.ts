import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  public usuario: any;

  constructor() {
    this.usuario = {
      nombre: null,
      apellido: null,
      correo: null
    };

  }

  ngOnInit() {
  }


  guardar(formularioTemplate: NgForm) {
    console.log('formularioTemplate:NgForm ', formularioTemplate);
    console.log('formularioTemplate y el valor de la forma: ', formularioTemplate.value);
    console.log('Formulario mandado');
    console.log('this.usuario: ', this.usuario);
  }

}
