import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
  <app-ng-style></app-ng-style> 
  <app-css></app-css>
  <app-ng-clases></app-ng-clases>

  <div class="container">
      <p appResaltado>
          Hola mundo desde app.component.html directiva appResaltado
        </p>

        <p id="resaltadodos" [appResaltadoDos]="'green'" >
            Hola mundo desde app.component.html directiva appResaltadoDos
        </p>

  </div>

  <div class="container">
    <app-ng-switch></app-ng-switch>
  </div>
  </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

constructor() {
console.log('constructor');
}

ngOnInit() {
console.log('ngOnInit');
}

ngOnChanges() {
console.log('ngOnChanges');
}

ngDoCheck() {
console.log('ngDoCheck');
}

ngAfterContentInit() {
console.log('ngAfterContentInit');
}

ngAfterContentChecked() {
console.log('ngAfterContentChecked');
}

ngAfterViewInit() {
console.log('ngAfterViewInit');
}

ngAfterViewChecked() {
console.log('ngAfterViewChecked');
}

ngOnDestroy() {
console.log('ngOnDestroy');
}



}
