import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
      correo: 'adrianbravo145@gmail.com',
      pasatiempos: []
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

      // 'nombrecompleto': new FormGroup({

      //     'nombre': new FormControl('', [Validators.required,
      //                                    Validators.minLength(3)]),
      //     'apellido': new FormControl('', Validators.required)

      // }),
      // 'correo': new FormControl('', [Validators.required,
      //                               Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      //                               ])


    // 1) manera de setear data:
    //   'nombrecompleto': new FormGroup({

    //     'nombre': new FormControl(this.usuario.nombrecompleto.nombre , [Validators.required,
    //                                    Validators.minLength(3)]),
    //     'apellido': new FormControl(this.usuario.nombrecompleto.apellido , Validators.required)

    // }),
    // 'correo': new FormControl(this.usuario.correo , [Validators.required,
    //                               Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    //                               ])


    // 2) manera de setear data:
          'nombrecompleto': new FormGroup({

          'nombre': new FormControl('', [Validators.required,
                                         Validators.minLength(3)]),
          'apellido': new FormControl('', Validators.required)

      }),
          'correo': new FormControl('', [Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ]),
          'pasatiempos': new FormArray([
              new FormControl('', Validators.required)
          ])

    });

    // this.formulario.setValue(this.usuario); // setear los valores

  }

  ngOnInit() {
  }

  guardarCambios() {
    console.log('El formulario es: ', this.formulario);
    console.log('El valor del formulario es: ', this.formulario.value);

    // Resetear el formulario
      // this.formulario.reset();
    this.formulario.reset({
        nombrecompleto: {
          nombre: '',
          apellido: ''
        },
          correo: '',
          pasatiempos: ''
      });
    (this.formulario.controls['pasatiempos'] as FormArray).clear();

    // this.formulario.controls['correo'].setValue('algo@gmail.com');
  }

  agregarPasatiempo() {
    (this.formulario.controls['pasatiempos'] as FormArray).push(new FormControl('', Validators.required));
    // (<FormArray>this.formulario.controls['pasatiempos']).push(new FormControl('comer', Validators.required));
  }

  deletePasatiempo(i: any) {
    (this.formulario.controls['pasatiempos'] as FormArray).removeAt(i);
  }



}




