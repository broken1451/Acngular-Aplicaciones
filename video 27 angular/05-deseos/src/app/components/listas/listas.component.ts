import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

 public listas: any;


//  @ViewChild(IonList) lista:IonList;
 @ViewChild('list') lista:IonList;
 @Input() terminada: any;

  constructor(private alertController: AlertController,public deseosService: DeseosService, private router: Router) { 
    this.listas = this.deseosService.listas;
    this.terminada = true;
  }

  ngOnInit() {}


  listaSeleccionada(lista: Lista) {

    if (this.terminada) {
      this.router.navigate([`/tabs/tab2/agregar/${lista.id}`]);
    } else {
      this.router.navigate([`/tabs/tab1/agregar/${lista.id}`]);
    }

    console.log('La lista de listaSeleccionada(lista: Lista): ', lista);
    console.log('La lista.id de listaSeleccionada(lista: Lista): ', lista.id);
  }


  borrarLista(lista: Lista) {

    this.deseosService.borrarLista(lista);
    console.log('La lista de borrarLista(lista: Lista): ', lista);

  }


  async editarLista(lista: Lista) {
    const alert = await this.alertController.create({
      header: 'Modificar Lista',
      // inputs son los campos del prompt
      inputs: [{
        name: 'titulo', // nombre del input del prompt
        type: 'text',   // tipo de formato del input,
        value: lista.titulo,
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        // handler es una funcion que se va a ejecutar cuando el boton se toque o cuando el popUp se cierre
        handler: () => {
          console.log('Cancelar');
          this.lista.closeSlidingItems();
        }
      },
      {
       text: 'Actualizar',
       handler: (dataPromt) => {
        console.log('dataPromt del formulario de alerta: ', dataPromt);

        if (dataPromt.titulo.length === 0) {
            return false;
        }

        lista.titulo = dataPromt.titulo;
        this.deseosService.guardarStorage();
        this.lista.closeSlidingItems();
       }

      }
    ]});

    alert.present();
  }


}
