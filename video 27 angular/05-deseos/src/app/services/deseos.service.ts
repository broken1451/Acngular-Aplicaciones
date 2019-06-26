import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';


@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  public listas: Lista[];

  constructor() {

    // const lista1 = new Lista('Recolectar piedras del infinito');
    // const lista2 = new Lista('Heroes a desaparecer');
    // this.listas.push(lista1, lista2);
    // console.log('this.listas: ', this.listas);

    console.log('Servicios de deseos funcionando');
    this.listas = [];
    this.cargarStorage();

  }


  crearLista(titulo: any) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }


  borrarLista(lista: Lista) {

    this.listas =  this.listas.filter((listaData) => {
      console.log('this.listas.filter su listaData: ', listaData);
      console.log('listaData.id !== lista.id: ', listaData.id , lista.id);
      return listaData.id !== lista.id;
    });

    this.guardarStorage();
    console.log('borrarLista(lista: Lista) su lista: ', lista);

  }


  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find((listaData: any) => {
      console.log('listaData del metodo obtenerLista: ', listaData);
      console.log('listaData.id === id del metodo obtenerLista: ', listaData.id);
      return listaData.id === id;
    });
  }



  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {

    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }

  }

























}
