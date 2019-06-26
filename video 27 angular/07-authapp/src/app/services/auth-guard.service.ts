import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot,
         CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


{}


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {



  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    // Esto siempre debe retornar un true o un false
    console.log('next ActivatedRouteSnapshot: ', next);
    console.log('state RouterStateSnapshot: ', state);


    if (this.authService.isAuthenticated()) {
      console.log('Paso el guard');
      return true;
    } else {
      console.error('bloqueado por guard');
      return false;
    }


  }

}
