import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// Servicios
import { ChatService } from '../../services/chat.service';

{}


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('campotexto', {static: true}) campotexto: ElementRef;

  public mensaje: string;
  public elemento: any;

  constructor( public chatservice: ChatService) {
    this.mensaje = '';

    // this.chatservice.cargarMensaje().subscribe( (mensajes: any[]) => {
    //     console.log('mensajes del servicio cargarMensaje: ', mensajes);
    // });

    this.chatservice.cargarMensaje().subscribe( () => {

      setTimeout( () => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });

  }

  ngOnInit() {
    console.log(this.campotexto);
    this.elemento = document.querySelector('#app-mensajes');

  }



  enviarMensaje() {
    console.log('this.mensaje: ', this.mensaje);

    if ( this.mensaje.length === 0 ) {
      return;
    }



    this.chatservice.agregarMensaje(this.mensaje).then( (res) => {
      console.log('Mensaje Enviado: ', res);
      this.mensaje = '';
    }).catch((err) => {
      console.log('Error al enviar el mensaje ', err);
    });

  }

}
