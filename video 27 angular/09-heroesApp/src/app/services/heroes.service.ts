import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroes.model';
import { map, delay } from 'rxjs/operators';


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

  actualizarHeroe(heroe: HeroeModel) {

    // const heroeTemp = {
    //   nombre: heroe.nombre,
    //   poder: heroe.poder,
    //   vivo: heroe.vivo
    //   id: heroe.id
    // };

    const heroeTemporal = {
      ...heroe
    };


    delete heroeTemporal.id;

    return this.httpClient.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemporal);

  }




  getHeroes() {

    return this.httpClient.get(`${this.url}/heroes.json`)
    .pipe( map( (res: any) => {
      console.log('res del map del getHeroes: ', res);
      delay(1500);
      return this.crearArreglo(res);
    }));

  
  }


  private crearArreglo(heroesObj: object) {

    const heroes: HeroeModel[] = [];
    console.log('heroesObj del crearArreglo: ', heroesObj);

    if (heroesObj === null) {
      return [];
    }

    Object.keys(heroesObj).map( (element, valor) => {
      const heroe: HeroeModel = heroesObj[element];
      console.log('heroe: ', heroe);
      console.log('element: ', element);
      console.log('valor: ', valor);
      heroe.id = element;
      heroes.push(heroe);
    });

    // Object.keys(heroesObj).forEach(element => {
    //   const heroe: HeroeModel = heroesObj[element];
    //   console.log('heroe: ', heroe);
    //   console.log('element: ', element);
    //   heroe.id = element;
    //   heroes.push(heroe);
    // });

    return heroes;
  }



  getHeroe(id: string) {
    return this.httpClient.get(`${this.url}/heroes/${id}.json`);
  }



  deleteHeroe(id: string) {
    return this.httpClient.delete(`${this.url}/heroes/${id}.json`);
  }


}
