import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // public paises: any[];

  // constructor( private httpClient: HttpClient) {

  //   console.log('Constructor del home funcionando');
  //   // this.paises = [];

    // // this.httpClient.get('https://restcountries.eu/rest/v2/lang/es').subscribe((res: any) => {
    // //   console.log('La res es: ', res);
    // //   this.paises = res;
    // // });

    // // }


    public newSongs: any[];
    public loading: boolean;
    public error: boolean;
    public mensajeError: any;

    constructor( private spotifyService: SpotifyService) {

      this.newSongs = [];
      this.loading = true;
      this.error = false;

      console.log('Constructor del home funcionando');

      this.spotifyService.getNewRealeases().subscribe((data: any) =>{
        // this.newSongs = data.albums.items;
        this.newSongs = data;
        this.loading = false;
        console.log('this.newSongs es this.newSongs: ', this.newSongs);
        console.log('La data del servicio de spotify es data: ', data);
      }, (errorService) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorService.error.error.message;
        console.log('errorService: ', errorService);
        console.log('errorService.error.error.message: ', errorService.error.error.message);
        console.log('this.mensajeError: ', this.mensajeError);
      });
    }


  ngOnInit() {


  }



}
