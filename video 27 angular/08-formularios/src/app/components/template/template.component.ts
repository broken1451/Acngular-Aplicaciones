import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  public usuario: any;
  public paises: any;
  public sexos: any[];


  constructor() {
    this.usuario = {
      nombre: null,
      apellido: null,
      correo: null,
      pais: '',
      sexo: 'Hombre',
      acepta: false
    };

    this.paises = [{
      codigo: 'VEN',
      nombre: 'Venezuela'
    },
    {
      codigo: 'USA',
      nombre: 'USA'
    }];

    this.sexos = ['Hombre' , 'Mujer', 'Otros', 'Sin Definir'];

  }

  ngOnInit() {
  }


  guardar(formularioTemplate: NgForm) {
    console.log('formularioTemplate:NgForm ', formularioTemplate);
    console.log('formularioTemplate y el valor de la forma: ', formularioTemplate.value);
    console.log('Formulario mandado');
    console.log('this.usuario: ', this.usuario);
    formularioTemplate.reset();
  }

}
