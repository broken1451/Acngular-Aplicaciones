import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


{}

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {


  constructor(private domSanitizer: DomSanitizer ) {

  }

  transform(value: any, ...args: any[]): any {

    let url = 'https://www.youtube.com/embed/';
    console.log('url del pipe youtube: ', url);
    console.log('value del pipe youtube: ', value);

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
