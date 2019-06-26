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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchHeroe(buscarHeroe: any) {
    this.router.navigate(['/seachHero', buscarHeroe]);
    console.log('buscarHeroe tiene como valor', buscarHeroe);
  }

}
