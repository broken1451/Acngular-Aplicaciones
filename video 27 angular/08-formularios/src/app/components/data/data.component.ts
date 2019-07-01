import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

{}


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {


  public formulario: FormGroup;

  public usuario: any;

  constructor() {

    this.usuario = {
     nombrecompleto : {
        nombre: 'Adrian',
        apellido: 'Bravo'
      },
      correo: 'adrianbravo145@gmail.com'
    };


    // this.formulario = new FormGroup({

    //   // 'nombre': new FormControl('valor por defecto', reglas de validacion , reglas de validacion asincronas)
    //   'nombre': new FormControl('', [Validators.required,
    //                                  Validators.minLength(3)]),
    //   'apellido': new FormControl('', Validators.required),
    //   'correo': new FormControl('', [Validators.required,
    //                                 Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    //                                 ])
    // });

    console.log('this.usuario es: ', this.usuario);

    this.formulario = new FormGroup({

      'nombrecompleto': new FormGroup({

          'nombre': new FormControl('', [Validators.required,
                                         Validators.minLength(3)]),
          'apellido': new FormControl('', Validators.required)

      }),
      'correo': new FormControl('', [Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ])
    });





  }

  ngOnInit() {
  }

  guardarCambios() {
    console.log('El formulario es: ', this.formulario);
    console.log('El valor del formulario es: ', this.formulario.value);
  }



}
