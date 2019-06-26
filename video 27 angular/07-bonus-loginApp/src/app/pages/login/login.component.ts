import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: UsuarioModel;
  public recordar: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new UsuarioModel();
    this.recordar =  false;
  }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordar = true;
    }
  }

  login(formulariologin: NgForm) {

    if (formulariologin.invalid) {
      return false;
    }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por Favor...'
    });
    Swal.showLoading(); // cambiar el boton por un showloading


    this.authService.login(this.usuario).subscribe((resp: any) => {

      console.log('resp login: ', resp);
      Swal.close(); // cerrar showloading

      if (this.recordar) {
        localStorage.setItem('email', this.usuario.email);
      } else {
        localStorage.removeItem('email');
      }

      this.router.navigate(['/home']);

    }, (err: any) => {
      console.log(err);
      console.log(err.error.error.message);

      Swal.fire({
        type: 'error',
        title: 'Error al ingresar',
        text: err.error.error.message
      });

    });

    console.log('this.usuario: ', this.usuario);
    console.log('Imprimir si el formulario es valido');
    console.log('formulariologin: ', formulariologin);

  }

}
