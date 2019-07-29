import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any, poster: boolean = false ): any {

  console.log('peliculas pipe: ', pelicula);
  console.log('poster pipe: ', poster);
  let url = 'http://image.tmdb.org/t/p/w300';

  if (poster) {
    return url + pelicula.poster_path;
  }

  if (pelicula.backdrop_path) {
        return url + pelicula.backdrop_path;
      } else {
        if (pelicula.poster_path) {
          return url + pelicula.poster_path;
        } else {
          return 'assets/img/noImage.png';
        }
      }


  // if (pelicula.backdrop_path) {
  //    return url + pelicula.backdrop_path;
  //   } else if (pelicula.poster_path) {
  //    return url + pelicula.poster_path;
  //   } else {
  //    return 'assets/img/noImage.png';
  //   }


  }

}
