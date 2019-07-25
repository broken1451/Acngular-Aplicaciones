import { Component } from '@angular/core';
import { PeliService } from './services/peli.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private peliService: PeliService) {
    // this.peliService.getPopulares().subscribe();
    // this.peliService.buscarPelicula('Capitana-Marvel').subscribe();
  }

}
