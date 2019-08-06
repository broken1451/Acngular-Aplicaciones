import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

// Jquery
declare var $: any;

{}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public videos: any[];
  public videoSeleccionado: any;
  public loading: boolean;
  public cargando: boolean;

  constructor(public youtubeService: YoutubeService) {

    this.videos = [];
    this.loading = true;
    this.cargando = false;
    // if (this.videos.length > 0) {
    //     return;
    // }
    setTimeout(() => {
      this.loading = true;
      this.youtubeService.getVideos().subscribe((videos: any) => {
        this.videos = videos;
        console.log('videos del homeComponent: ', videos);
      });
      this.loading = false;
    }, 5000);


  }

  ngOnInit() {
  }


  verVideo(video: any) {
    console.log('video: ', video);
    $('#myModal').modal();
    this.videoSeleccionado = video;
  }



  cerrarModal() {
    this.videoSeleccionado = null;
    $('#myModal').modal('hide');
  }

  cargarMasVideos() {
    this.cargando = true;
    setTimeout(() => {
      this.youtubeService.getVideos().subscribe((videos: any) => {
        this.videos.push.apply(this.videos, videos);
        console.log('videos del homeComponent: ', videos);
        this.cargando = false;
      });
    }, 2000);
  }

}
