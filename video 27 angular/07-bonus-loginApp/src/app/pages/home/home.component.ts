import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private autService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  salir() {

    this.autService.logout();
    this.router.navigate(['/login']);

  }

}
