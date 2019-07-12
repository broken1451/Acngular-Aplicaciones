import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroes.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public url: any;

  constructor(private httpClient: HttpClient) {

    this.url = `https://crududemyangular.firebaseio.com`;

  }

  crearHeroe( heroe: HeroeModel) {

    // return this.httpClient.post( `${this.url}/heroes.json`, heroe);
    return this.httpClient.post(this.url + '/heroes.json', heroe)
                           .pipe(map((res: any) => {
                            heroe.id = res.name;
                            console.log('res del map: res', res);
                            return heroe;
                          }));


  }




}
