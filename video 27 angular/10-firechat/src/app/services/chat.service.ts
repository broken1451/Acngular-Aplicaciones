import { Injectable } from '@angular/core';

// Anggular fire 2
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

// Observables
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Interfaces/Modelos
import { Mensaje } from '../interfaces/mensaje.interface';


{}



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chats: Mensaje[];
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  constructor(private angularFirestore: AngularFirestore) {
    this.chats = [];

  }

  cargarMensaje(): Observable<any> {

    // this.itemsCollection = this.angularFirestore.collection<Mensaje>('chats');
    // return this.itemsCollection.valueChanges();

    this.itemsCollection = this.angularFirestore.collection<Mensaje>('chats');
    return this.itemsCollection.valueChanges().pipe( map( (mensajes: Mensaje[]) => {
      console.log('mensajes del map de cargarMensaje: ', mensajes);
      this.chats = mensajes;
    }));
  }

  agregarMensaje(texto: string) {
    // TODO falta elUID del usuario
    let mensaje: Mensaje = {
      nombre: 'demo',
      mensaje: texto,
      fecha: new Date().getTime(),
    };

    return this.itemsCollection.add(mensaje);
  }



}
