import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

{}

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  /*
    "uploads": "UUv85NiROLKddHa0fBATwTzw",
     apiKey: AIzaSyBkduG5JEpfLL_-Kg6ZRtYXzO_r79jQ6aI
     nextPageToken: "CA8QAA"
  */
  private youtubeUrl: string;
  private apiKey: string;
  private playList: string;
  private nextPageToken: string;


  constructor( public httpClient: HttpClient) {
    this.youtubeUrl = 'https://www.googleapis.com/youtube/v3';
    this.apiKey = 'AIzaSyBkduG5JEpfLL_-Kg6ZRtYXzO_r79jQ6aI';
    this.playList = 'UUv85NiROLKddHa0fBATwTzw';
    this.nextPageToken = '';
  }


  getVideos() {


  let url = `${ this.youtubeUrl }/playlistItems`;

  let param = new HttpParams();
  param = param.set('part', 'snippet');
  param = param.set('maxResults', '15');
  param = param.set('playlistId', this.playList);
  param = param.set('key', this.apiKey);

  if (this.nextPageToken) {
    param = param.set('pageToken', this.nextPageToken);
  }

  return this.httpClient.get(url, { params: param }).pipe( map( (res: any) => {
    console.log('respuesta del map getVideos(): ', res);
    this.nextPageToken = res.nextPageToken;

    let videos: any[] = [];

    // for (let video of res.items) {
    //   console.log('variable video de for of', video);

    //   let snippet = video.snippet;
    //   console.log('variable snippet dentro for of', snippet);
    //   videos.push(snippet);
    // }

    res.items.map( (element) => {
      console.log('variable element del map', element);
      let snippet = element.snippet;
      console.log('variable snippet dentro map', snippet);
      videos.push(snippet);
    });

    console.log('arreglo videos del servicio getVideos()', videos);
    return videos;

  }));

  }


}













































































































































/*

getVideos() {


  let url = `${ this.youtubeUrl }/playlistItems`;
  // let header = new HttpHeaders({
  //   'Content-Type': 'application/json'
  // });
  let param = new HttpParams();
  param = param.set('part', 'snippet');
  param = param.set('maxResults', '10');
  param = param.set('playlistId', this.playList);
  param = param.set('key', this.apiKey);

  // return this.httpClient.get(url, { headers: header, params: param });
  return this.httpClient.get(url, { params: param });

  }
*/









/*

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
  private apikey:string = "AIzaSyBkduG5JEpfLL_-Kg6ZRtYXzO_r79jQ6aI";
  private playlist:string = "UUx-1Yj2eefFfa_G3Q9PSsSQ";

  constructor(public http: HttpClient) {
    console.log('servicioss');
  }

  getQuery(query:string, param: HttpParams){
    const url = `${this.youtubeUrl}${query}`;
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, { headers: header, params: param });
  }

  getVideos(){
    const query = '/playlistItems';
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist)
      .set('key', this.apikey);

    // return this.http.get(url)
    return this.getQuery(query, params )
      .pipe( map( res => {
          console.log(res);
          console.log('NO SE IMPRIME, NO INGRESA AL MAP');
        })
      );

  }
}


*/

