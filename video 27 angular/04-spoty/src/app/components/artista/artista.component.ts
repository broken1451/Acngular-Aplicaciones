import { Component, OnInit } from '@angular/core';

// Rutas por parametros de la url
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

{}


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  public artista: any = {};
  public loading: boolean;
  public topTracks: any[];

  constructor( private spotifyService: SpotifyService , private activatedRoute: ActivatedRoute) {
    this.loading = true;
    this.activatedRoute.params.subscribe((parametrosUrl) => {
      // console.log('Los para metrode la url son parametrosUrl: ', parametrosUrl['id']);
      console.log('Los para metrode la url son parametrosUrl: ', parametrosUrl);
      console.log('Los para metrode la url son parametrosUrl.id: ', parametrosUrl.id);
      this.getArtista(parametrosUrl.id);
      this.getTopTracks(parametrosUrl.id);
    });

  }

  ngOnInit() {
  }

  getArtista(id: any) {
    this.loading = true;
    this.spotifyService.getArtista(id).subscribe((artista) => {
      this.artista = artista;
      this.loading = false;
      console.log('artista del metodo getArtista: ', artista);
    });


  }



  getTopTracks(id: any) {
    this.spotifyService.getTopTrack(id).subscribe((toptracks) => {
      this.topTracks = toptracks;
      console.log('Los toptracks', toptracks);
    });
  }


}
