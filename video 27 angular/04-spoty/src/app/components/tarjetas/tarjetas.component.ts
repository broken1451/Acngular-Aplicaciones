import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
{}



@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {


  @Input() newSongs: any[];
  @Input() artistas: any[];

  constructor( private router: Router) {
    this.newSongs = [];
    this.artistas = [];
   }

  ngOnInit() {
  }


  verArtista(item: any) {

    let artistaId;

    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistaId]);

    console.log('item del verArtista(item) es: ', item);
    console.log('artistaId del verArtista(item) es: ', artistaId);
  }

}
