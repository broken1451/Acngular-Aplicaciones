import { Component, OnInit } from '@angular/core';

// Modelo
import { Marcador } from '../../models/marcador.class';


// Angular Material
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

// Componentes
import { MapaEditarComponent } from './mapa-editar.component';

{}


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

 public lat: number;
 public lng: number;
 public marcadores: Marcador[];

  constructor( private snackBar: MatSnackBar, public dialog: MatDialog ) {

    this.marcadores = [];
    this.lat = 51.678418;
    this.lng = 7.809007;

    // const nuevoMarcador = new Marcador( 51.678418, 7.809007 );
    // this.marcadores.push(nuevoMarcador);

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

   }

  ngOnInit() {
  }


  agregarMarcador(evento: any) {
    // const coords: {lat: number, lng: number} = evento.coords;
    const coords = evento.coords;
    const nuevoMarcador = new Marcador( coords.lat, coords.lng );
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 3000});
    console.log('evento de agregarMarcador():', evento);
  }

  borrarMarcador(i: number) {
    console.log('el valor de i: ', i);
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 3000});
  }

  editarMarcador(marcador: Marcador ) {
    // const dialogRef = this.dialog.open(NombreDelComponenteQueQueremosQueRendediseDentroDelModal, {
    // Opciones:
    //   width: '250px',
    //   informacion enviada al modal
    //   data: {name: this.name, animal: this.animal}
    // });

    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Resultado que viene del modal');
      console.log('result del dialogRef:', result);

      if (!result) {
        return;
      }

      marcador.titulo = result.Titulo;
      marcador.descripcion = result.Descripcion;
      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', {duration: 3000});
    });


  }


  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
