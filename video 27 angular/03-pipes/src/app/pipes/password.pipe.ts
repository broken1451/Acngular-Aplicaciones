import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, activar: any): any {

    console.log('value del pipe es: ', value);
    console.log('activar del pipe es: ', activar);

    let decifrado = value;

    if (activar) {
      decifrado = decifrado.replace( /./g, '*');
    }

    console.log('decifrado del pipe es: ', decifrado);
    return decifrado;

  }

}
