import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: any, todas: any = true): any {

    // Los argumento son por separados para ponerlos todos en un solo arreglo  transform(value: any, ...args: any): any
    // // Los argumento son por separados para ponerlos separados  transform(value: any, args1, args2, args3): any

    console.log('el valor de value del pipe es: ', value );
    console.log('el valor de todas del pipe es: ', todas);

    const nombre = value.toLowerCase(); // meto el valor de value en nombre
    const nombres = nombre.split(' '); // meto nombre dentro de la variable nombres


    // if (todas) {
    //   // tslint:disable-next-line:forin
    //   for (const i in nombres) {
    //     nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
    //   }

    // } else {
    //   nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    // }

    if (todas) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < nombres.length; i++) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }




    console.log('el valor de nombre del pipe es: ', nombre );
    console.log('el valor de nombres del pipe es: ', nombres);
    console.log('el valor de nombres.join(" ") del pipe es: ', nombres.join(' '));

    // return 'HOLA MUNDO';
    return nombres.join(' '); // unir la cadena


  }

}
