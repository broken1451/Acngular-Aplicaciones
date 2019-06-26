import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listas: Lista[] = [];

    constructor(public deseosService: DeseosService,
                private router: Router, public alertController: AlertController) {

      this.listas = this.deseosService.listas;
      console.log('this.listas del tabs1: ', this.listas );

    }



   async agregarLista() { // al poner async trasformamos el metodo en una promesa

    // this.router.navigateByUrl('/tabs/tab1/agregar');
      // this.router.navigate(['/tabs/tab1/agregar']);


      // el alert controller trabaja con promesa
      // await espera q la promesa se ejecute


      const alert = await this.alertController.create({
        header: 'Nueva lista',
        // inputs son los campos del prompt
        inputs: [{
          name: 'titulo', // nombre del input del prompt
          type: 'text',   // tipo de formato del input
          placeholder: 'Nombre de la lista' 
        }],
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          // handler es una funcion que se va a ejecutar cuando el boton se toque o cuando el popUp se cierre
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
         text: 'Crear',
         handler: (dataPromt) => {
          console.log('dataPromt del formulario de alerta: ', dataPromt);
          console.log('dataPromt.titulo del formulario de alerta: ', dataPromt.titulo);
          if (dataPromt.titulo.length === 0) {
              return false;
          }

          // Crear la lista
          const listaID = this.deseosService.crearLista(dataPromt.titulo);
          this.router.navigate([`/tabs/tab1/agregar/${listaID}`]);

         }

        }
      ]});

      alert.present();

    }




    // listaSeleccionada(lista: Lista) {
    //   this.router.navigate([`/tabs/tab1/agregar/${lista.id}`]);
    //   console.log('La lista de listaSeleccionada(lista: Lista): ', lista);
    //   console.log('La lista.id de listaSeleccionada(lista: Lista): ', lista.id);
    // }

}
