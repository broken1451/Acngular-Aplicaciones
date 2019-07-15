import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroes.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';

// Sweet Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  public heroe: HeroeModel;

  constructor(private heroesService: HeroesService, private activatedRouter: ActivatedRoute) {
    this.heroe = new HeroeModel();
  }


  ngOnInit() {
    // const id = this.activatedRouter.params.subscribe( (parametrosUrl) => {
    //   console.log('parametrosUrl: ' , parametrosUrl);
    // });

    const id = this.activatedRouter.snapshot.paramMap.get('id');
    console.log('parametrosUrl con la const id: ', id);

    if (id !== 'nuevo') {
      this.heroesService.getHeroe(id).subscribe((res: HeroeModel) => {
        console.log('res del servicio getheroe: ', res);
        this.heroe = res;
        this.heroe.id = id;
      });
    }


    // if (id === 'nuevo') {
    //   this.heroesService.crearHeroe(this.heroe).subscribe((res: any) => {
    //     console.log('res del servicio crearHeroe: ', res);
    //     this.heroe = res;
    //   });
    // } else {
    //   this.heroesService.getHeroe(id).subscribe((res: any) => {
    //         console.log('res del servicio getheroe: ', res);
    //         this.heroe = res;
    //         this.heroe.id = id;
    //   });
    // }

  }



  guardar(formulario: NgForm) {
    console.log('El formulario: ', formulario);
    console.log('this.heroes: ', this.heroe);

    if (formulario.invalid) {
        console.log('formulario Invalido');
        return;
    }


    Swal.fire({
      title: 'Espere',
      text: 'Guardando Informacion',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    // if (this.heroe.id) {
    //   this.heroesService.actualizarHeroe(this.heroe).subscribe((res: any) => {
    //     console.log('La res del servicio actualizarHeroe es: ', res);
    //   });
    // } else {
    //   this.heroesService.crearHeroe(this.heroe).subscribe((res: any) => {
    //     this.heroe = res;
    //     console.log('La res del servicio crearheroe es: ', res);
    //     // formulario.reset();
    //   });
    // }


    /*
       .subscribe((res: any) => {
      console.log('La res del servicio actualizarHeroe es: ', res);
    });


    .subscribe((res: any) => {
      this.heroe = res;
      console.log('La res del servicio crearheroe es: ', res);
      // formulario.reset();
    });
    */


    if (this.heroe.id) {
     peticion = this.heroesService.actualizarHeroe(this.heroe);
    } else {
     peticion = this.heroesService.crearHeroe(this.heroe);
    }

    peticion.subscribe((res: any) => {
      console.log('La res de peticion es: ', res);
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizo correctamente',
        type: 'success',
        allowOutsideClick: false
      });
    });



  }


}
