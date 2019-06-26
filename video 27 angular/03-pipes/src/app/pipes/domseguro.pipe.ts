import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; // 

{}


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer) {
    console.log('DomSanitizer es: ', domSanitizer);
  }


  transform(value: any, url: any): any {

    console.log('value del pipe domseguro es: ', value );
    console.log('url del pipe domseguro es: ', url );


    // return this.domSanitizer.bypassSecurityTrustResourceUrl(url seguro y valido + value);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);



  }

}
