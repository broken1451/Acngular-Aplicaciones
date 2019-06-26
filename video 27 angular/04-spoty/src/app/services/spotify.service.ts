import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {
    console.log('Spotify service listo para usar');
  }

  // funcion del query para reducir codigo
  getQuery( query: any) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBhA2yO1LEOEAK9U6b567OSVTU3GXtoJvBN8Ic3_YBI87fRDlO7poUWYy8un1ATOZY6cYBsT1Zq_4bhYS0'
    });

    return this.httpClient.get(url, {headers});
  }

  getNewRealeases() {


    // const headers = new HttpHeaders({
    // 'Authorization': 'Bearer BQBvvs-r7Znw1kffgFY-TvjH9mbSxS-HapfjXXV8hD5DrtEgnIk1qrYsR-1Am_jZGbAhdbBkPg1j-Nf7et3DGRcvnNi7ZS2Wmdca9jm3XK8UIyBDG6oDuF92g0uc-K-T8Mt_Z6DEVxmOVA'
    // });

    // return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
                          // .pipe(map((data: any) => {
                          //   // return data.['albums'].items;
                          //   return data.albums.items;
                          // }));

    return this.getQuery('browse/new-releases?limit=20')
                .pipe(map((data: any) => {
                  // return data.['albums'].items;
                  return data.albums.items;
                }));


  }

  getArtistas(termino: any) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBIWVPPVXkK1I3paxPDgSUuWd4OPXy2BZb7L85t3DEe5S9-RNRdVheWGMWy4neQg0nKaOv_knOgwcJUVx607VOz3M432eZL4SQqcd9hqPPok6w3HRi4pRIGaJjnnDGeSAWGOFfyNENrVw'
    // });

    // return this.httpClient.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    //                       .pipe(map((data: any) => {
    //                         // return data.['albums'].items;
    //                         return data.artists.items;
    //                       }));

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe(map((data: any) => {
                 // return data.['albums'].items;
                 return data.artists.items;
               }));

  }

  getArtista(id: any) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBIWVPPVXkK1I3paxPDgSUuWd4OPXy2BZb7L85t3DEe5S9-RNRdVheWGMWy4neQg0nKaOv_knOgwcJUVx607VOz3M432eZL4SQqcd9hqPPok6w3HRi4pRIGaJjnnDGeSAWGOFfyNENrVw'
    // });

    // return this.httpClient.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    //                       .pipe(map((data: any) => {
    //                         // return data.['albums'].items;
    //                         return data.artists.items;
    //                       }));

    return this.getQuery(`artists/${id}`);
              //  .pipe(map((data: any) => {
              //    // return data.['albums'].items;
              //    return data.artists.items;
              //  }));

  }

  getTopTrack(id: any) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe(map((data: any) => {
                 // return data.['albums'].items;
                 return data.tracks;
                }));
  }

}
