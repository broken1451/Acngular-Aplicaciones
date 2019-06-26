import { Component, OnInit } from '@angular/core';

// Servicio
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public artistas: any [];
  public loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.artistas = [];
   }

  ngOnInit() {
  }

  buscar(termino: any) {
    this.loading = true;
    this.spotifyService.getArtistas(termino).subscribe((data: any) => {

      // this.artistas = data.artists.items;
      this.artistas = data;
      this.loading = false;
      console.log('this.artistas del metodo buscar es: ', this.artistas);
      console.log('La data del netodo buscar es: ', data);
    });
    console.log('termino: ', termino);

  }



}
