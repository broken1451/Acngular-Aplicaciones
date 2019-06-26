import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario: UsuarioModel;
  public recordar: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.recordar = false;
  }

  ngOnInit() {
    // this.usuario.email = 'Adrianbravo145@gmail.com';
    this.usuario = new UsuarioModel();

  }


  onSubmit(formulario: NgForm) {

    if (formulario.invalid) {
      return false;
    }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por Favor...'
    });
    Swal.showLoading(); // cambiar el boton por un showloading

    this.authService.nuevoUsuario(this.usuario).subscribe((resp: any) => {
      console.log('resp registro: ' , resp);
      Swal.close(); // cerrar showloading

      if (this.recordar) {
        localStorage.setItem('email', this.usuario.email);
      } else {
        localStorage.removeItem('email');
      }

      this.router.navigate(['/home']);
    }, (err) => {
      console.log(err);
      console.log(err.error.error.message);
      Swal.fire({
        type: 'error',
        title: 'Error al ingresar',
        text: err.error.error.message
      });
    });


    console.log('Formulario enviado');
    console.log( 'this.usuario: ', this.usuario);
    console.log( 'formulario: ', formulario);

  }


}
