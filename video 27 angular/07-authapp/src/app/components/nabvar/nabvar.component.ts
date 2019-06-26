import { Component, OnInit } from '@angular/core';

// Servicio
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss']
})
export class NabvarComponent implements OnInit {

  constructor(public authService: AuthService) {
    authService.handleAuthentication();
  }

  ngOnInit() {
  }


  login() {
    this.authService.login();
  }


  salir() {
    this.authService.logout();
  }





}
