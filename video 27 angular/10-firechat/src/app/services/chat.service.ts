import { Injectable } from '@angular/core';

// Angular fire 2
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';

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

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[];
  public usuario: any;

  constructor(private angularFirestore: AngularFirestore,
              public angularFireAuth: AngularFireAuth) {
    this.chats = [];
    this.usuario = {};

    this.angularFireAuth.authState.subscribe( (user) => {
      console.log('Estado del usuario: ', user);

      if (!user) {
        return;
      }

      // se crean las porpiedades en el objeto
      this.usuario.nombre = user.displayName;
      this.usuario.imagen = user.photoURL;
      this.usuario.uid = user.uid;

      console.log('this.usuario: ', this.usuario);
    });

  }

  cargarMensaje(): Observable<any> {

    // this.itemsCollection = this.angularFirestore.collection<Mensaje>('chats');
    // return this.itemsCollection.valueChanges();

    // querys a firebase
    this.itemsCollection = this.angularFirestore.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc')
                                                                                        .limit(10));

    return this.itemsCollection.valueChanges().pipe( map( (mensajes: Mensaje[]) => {
      // console.log('mensajes del map de cargarMensaje: ', mensajes[1].fecha);
      console.log('mensajes del map de cargarMensaje: ', mensajes);

      this.chats = [];

      // Map
      // mensajes.map(element => {
      //   this.chats.unshift(element);
      // });

      // For of
      // for (const mensaje of mensajes) {
      //   this.chats.unshift(mensaje);
      // }

      // ForEach
      mensajes.forEach(element => {
        this.chats.unshift(element);
      });

      // this.chats = mensajes;
      return this.chats;
    }));
  }

  agregarMensaje(texto: string) {
    // TODO falta elUID del usuario

    if (this.usuario) {
      let mensaje: Mensaje = {
        nombre: this.usuario.nombre,
        mensaje: texto,
        fecha: new Date().getTime(),
        uid: this.usuario.uid
      };

      return this.itemsCollection.add(mensaje);
    } else {
      let mensaje: Mensaje = {
        nombre: 'demo',
        mensaje: texto,
        fecha: new Date().getTime(),
      };

      return this.itemsCollection.add(mensaje);
    }

  }





  login(proveedor: string) {

    // if (proveedor === 'Google') {
    //   this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // } else if ( proveedor === 'Github' ) {
    //   this.angularFireAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
    // } else {
    //   this.angularFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    // }

    if (proveedor === 'Google') {
      this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }  else {
      this.angularFireAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
    }

  }

  logout() {
    this.usuario = {};
    this.angularFireAuth.auth.signOut();
  }




}
