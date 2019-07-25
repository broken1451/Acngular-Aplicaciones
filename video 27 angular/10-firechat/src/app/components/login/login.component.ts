import { Component, OnInit } from '@angular/core';

// Servicios
import { ChatService } from '../../services/chat.service';

{}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private chatService: ChatService) {

  }

  ngOnInit() {

  }



  ingresar(proveedor: string) {
    console.log('Proveedor: ', proveedor);
    this.chatService.login(proveedor);
  }

}
