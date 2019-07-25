import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PeliService {

  public apiKey: string;
  public urlMoviedb: string;

  constructor(private httpClient: HttpClient) {
    this.apiKey = '8ee813186f1978b4c769a17cf5c144ab';
    this.urlMoviedb = 'https://api.themoviedb.org/3';
  }

  getPopulares() {
     let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
     return this.httpClient.jsonp(url, 'JSONP_CALLBACK');
  //    .pipe( map( (res) => {
  //     console.log(res);
  //  }));

  }


  buscarPelicula( texto: string ) {

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.httpClient.jsonp(url, 'JSONP_CALLBACK');
  //   .pipe( map( (res) => {
  //     console.log(res);
  //  }));


  }

  getCartelera() {

    let desde= new Date();
    let hasta= new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;


    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.httpClient.jsonp(url, 'JSONP_CALLBACK');
  }

  getPopularesNinos() {
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.httpClient.jsonp(url, 'JSONP_CALLBACK');
    //    .pipe( map( (res) => {
    //     console.log(res);
    //  }));

 }




}

