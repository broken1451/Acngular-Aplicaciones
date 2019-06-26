import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';

  public apiKey = 'AIzaSyDfXFsJSa9AQ4NuwbKbLb-mq5-C9XCMwic';

  public userToken: string;

 // Crear usuario
    // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

// Login
    // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  constructor(private httpClient: HttpClient ) {
    this.leerToken();
  }


  logout() {
    localStorage.removeItem('token');

  }

  login( usuario: UsuarioModel) {
      /*
          const authData = {
            ...usuario,
             returnSecureToken: true
          };
      */
      const authData = {
        email: usuario.email,
        password: usuario.password,
        returnSecureToken: true
    };
    // return this.httpClient.post( `${this.url}/verifyPassword?key=${this.apiKey}`, authData);
      return this.httpClient.post(this.url +  `/verifyPassword?key=${this.apiKey}`, authData )
                            .pipe(map((resp: any) => {
                              console.log('resp del map entro en el mapa: ', resp);
                              // this.guardarToken(resp.idToken);
                              this.guardarToken(resp['idToken']);
                              return resp;
                            }));

  }

  nuevoUsuario(usuario: UsuarioModel) {

      /*
         const authData = {
          ...usuario,
          returnSecureToken: true
        };
      */

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    // return this.httpClient.post( `${this.url}/signupNewUser?key=${this.apiKey}`, authData);
    return this.httpClient.post(this.url +  `/signupNewUser?key=${this.apiKey}`, authData )
                          .pipe(map((resp: any) => {
                            console.log('resp del map entro en el mapa: ', resp);
                            // this.guardarToken(resp.idToken);
                            this.guardarToken(resp['idToken']);
                            return resp;
                          }));

  }

  guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token' , idToken);

// tslint:disable-next-line: prefer-const
    let hoy  = new Date();
    hoy.setSeconds(3600);
    // localStorage.setItem('expira', JSON.stringify(hoy.getTime().toString()));
    localStorage.setItem('expira', hoy.getTime().toString());
  }


  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken =  localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    // return this.userToken;
  }


  estaAutenticado(): boolean {

  if (this.userToken.length < 2) {
    return false;
  }

  const expira = Number(localStorage.getItem('expira'));
  const expiraDate = new Date();
  expiraDate.setTime(expira);

  if (expiraDate > new Date()) {
    return true;
  } else {
    return false;
  }

    // return this.userToken.length > 2;

  }

}


