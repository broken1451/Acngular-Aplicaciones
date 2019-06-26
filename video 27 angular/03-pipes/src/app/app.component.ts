import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public nombre = 'Adrian Bravo';
  public nombre2 = 'ADrIan bRaVo';
  public arreglo = [1, 2 , 3 , 4, 5, 6, 7, 8 , 9 , 10];
  public PI = Math.PI;
  public a = 0.234;
  public salario = 1234.5;
  public heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
      direccion: {
        calle: 'Primera',
        casa: '19'
      }
  };

  public valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Llego la data');
      console.log('Llego la data');
    }, 3500);

  });


  public fecha = new Date();

  public video = 'q2I0ulTZWXA';

  public activar = true;





}
