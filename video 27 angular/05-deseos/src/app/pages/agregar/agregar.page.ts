import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  public listas: Lista;
  public nombreItem: any;

  constructor(private deseosService: DeseosService, 
              private activatedRouter: ActivatedRoute) {

    // para no generer un observable
    // const listaID = this.activatedRouter.snapshot.paramMap.get('parametro de lka ruta');
    const listaID = this.activatedRouter.snapshot.paramMap.get('listaID');
    this.listas = this.deseosService.obtenerLista(listaID);
    console.log('listaID: ', listaID);
    console.log(' this.listas: ',  this.listas);

  }

  ngOnInit() {
  }


  agregarItem() {

    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.listas.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.guardarStorage();
    console.log(' nuevoItem: ', nuevoItem);
  }


  cambioCheck(item: ListaItem) {
    console.log('item de cambioCheck(): ', item);

    const pendientes = this.listas.items.filter((itemData) => {
      console.log('itemData: ', itemData);
      return !itemData.completado;
    }).length;


    if (pendientes === 0) {
      this.listas.terminadaEn = new Date();
      this.listas.terminada = true;
    } else {
      this.listas.terminadaEn = null;
      this.listas.terminada = false;
    }

    console.log('pendientes: ', pendientes);
    console.log('this.deseosService.listas: ', this.deseosService.listas);
    this.deseosService.guardarStorage();

  }

  borrar(i: any){
    console.log('i del metodo de borrar(i): ', i);
    this.listas.items.splice(i, 1);
    this.deseosService.guardarStorage();

  }


}
