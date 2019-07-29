import { Component, OnInit } from '@angular/core';

// Router
import { Router } from '@angular/router';

{}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  BuscarPeli(textoInput: string) {
    if (textoInput.length === 0) {
      return;
    }

    this.router.navigate(['buscar', textoInput]);
    console.log('texto del input del navbar: ', textoInput);
  }


}
