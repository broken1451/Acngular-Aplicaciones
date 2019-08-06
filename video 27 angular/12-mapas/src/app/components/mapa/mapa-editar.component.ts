import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Marcador } from '../../models/marcador.class';

{}

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.scss']
})
export class MapaEditarComponent implements OnInit {

  public formulario: FormGroup;

  constructor( public dialogRef: MatDialogRef<MapaEditarComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Marcador,
               public formBuilder: FormBuilder) {

      this.formulario = formBuilder.group({
        'Titulo': data.titulo,
        'Descripcion': data.descripcion
      });

      console.log('data recivida del mapaComponent: ', data);
    }

  ngOnInit() {
  }

  guardarCambios() {
    this.dialogRef.close(this.formulario.value);
    console.log(this.formulario.value);
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
