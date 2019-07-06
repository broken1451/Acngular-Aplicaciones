import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
          'apellido': new FormControl('', [Validators.required, this.noBravo])

      }),
          'correo': new FormControl('', [Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ]),
          'pasatiempos': new FormArray([
              new FormControl('Dormir', Validators.required)
          ]),
          'username': new FormControl('', [Validators.required], this.existeUsuario ),
          'password1': new FormControl('', [Validators.required]),
          // 'password2': new FormControl('', Validators.required)
          'password2': new FormControl()

    });

    this.formulario.controls['password2'].setValidators([
      Validators.required, this.noIgual.bind(this.formulario)]
    );

    // this.formulario.setValue(this.usuario); // setear los valores



      // Detectar los cambios en los valores o estados del formulario o un control
    this.formulario.valueChanges.subscribe((data: any) => {
      console.log(data);
    });


    this.formulario.controls['username'].valueChanges.subscribe((data: any) => {
      console.log(data);
    });


    this.formulario.controls['username'].statusChanges.subscribe((data: any) => {
      console.log(data);
    });



  }

  ngOnInit() {
  }

  guardarCambios() {
    console.log('El formulario es: ', this.formulario);
    console.log('El valor del formulario es: ', this.formulario.value);

    // Resetear el formulario
      // this.formulario.reset();
    // this.formulario.reset({
    //     nombrecompleto: {
    //       nombre: '',
    //       apellido: ''
    //     },
    //       correo: '',
    //       pasatiempos: ''
    //   });

    // (this.formulario.controls['pasatiempos'] as FormArray).clear();

    // this.formulario.controls['correo'].setValue('algo@gmail.com');
  }


  // noBravo(control: FormControl): {[s: string]: boolean} {

  // }

  noBravo(control: FormControl): any {

    console.log('noBravo el valor de control es: ', control);

    if (control.value === 'Bravo') {

       return {
           noBravo: true
       };
    }

    return null;

  }

  noIgual(control: FormControl): any {

    const forma: any = this;

    console.log('noIgual el valor de control es: ', control);
    console.log('noIgual el valor de forma es: ', forma);
    console.log('this es: ', this);

    if ((control.value !== forma.controls['password1'].value)) {
      // forma.controls['password2'].disable();
      // forma.controls['password2'].disable();
       return {
          noIgual: true
       };
    }


    return null;

  }


  // noIgual1(control: FormControl): any {


  //   console.log('noIgual el valor de control es: ', control);


  //   if (control.value !== this.formulario.controls['password1'].value) {

  //      return {
  //         noIgual1: true
  //      };
  //   }

  //   return null;

  // }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
  // existeUsuario(control: FormControl): any {

    const promesa = new Promise ((resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'broken1451') {
            resolve({existeUsuario: true});
          } else{
            resolve(null);
            reject();
          }
        }, 3000);
    });

    return promesa;
  }


  agregarPasatiempo() {
    (this.formulario.controls['pasatiempos'] as FormArray).push(new FormControl('', Validators.required));
    // (<FormArray>this.formulario.controls['pasatiempos']).push(new FormControl('comer', Validators.required));
  }

  deletePasatiempo(i: any) {
    (this.formulario.controls['pasatiempos'] as FormArray).removeAt(i);

  }










}


