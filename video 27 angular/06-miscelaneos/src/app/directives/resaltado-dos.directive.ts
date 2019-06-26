import {  Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appResaltadoDos]'
})
export class ResaltadoDosDirective {

  constructor(private elementRef: ElementRef) {

    console.log('Directiva llamada');
    console.log('elementRef: ', elementRef);
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
  }


  // @Input('appResaltadoDos') nuevoColor: string;
  @Input() appResaltadoDos: string;

  @HostListener('mouseenter') mouseEntro() {

    // this.resaltar(this.nuevoColor ||  'yellow');
    // console.log('this.nuevoColor: ', this.nuevoColor);
    this.resaltar(this.appResaltadoDos ||  'yellow');
    console.log('this.appResaltadoDos: ', this.appResaltadoDos);
  }

  @HostListener('mouseleave') mouseSalio() {

    this.resaltar(null);
    // console.log('this.nuevoColor: ', this.nuevoColor);
    console.log('this.appResaltadoDos: ', this.appResaltadoDos);
  }

  private resaltar(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

} 
