import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // next: ActivatedRouteSnapshot, // cual es la siguiente ruta a navegar
  // state: RouterStateSnapshot // Estado actual de la ruta

  constructor( private authService: AuthService, private router: Router) {

  }

  canActivate(): boolean {

      if (this.authService.estaAutenticado()) {
        console.log('paso el guard');
        return true;
      } else {
        console.log('bloqueado por el guard');
        this.router.navigate(['/login']);
        return false;
      }
  }

}
