import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroes.model';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: HeroeModel[];
  public cargando: boolean;

  constructor( private heroesService: HeroesService ) {
    this.heroes = [];
    this.cargando = false;
  }

  ngOnInit() {
    this.cargando = true;
    this.heroesService.getHeroes().subscribe((res: any) => {
      console.log('la res del servicio getHeroes es: ', res);
      this.heroes = res;
      this.cargando = false;
    });

  }


  // borrarHeroe(id o el heroe completo ) {}
  borrarHeroe(heroe: HeroeModel, i: number) {

    // TODO: Listo mejor es la otra forma D: hacer el llamado del servicio para obtener todos los heroes despues del subcribe html (click)="borrarheroe(heroe, )"

    // this.heroesService.borrarheroe(heroe.id).subscribe((res: any) => {
    //   console.log('la res del servicio deleteHeroe es: ', res);
    //   this.heroesService.getHeroes().subscribe();
    // });



    Swal.fire({
    title: `Esta seguro?`,
    text: `Esta seguro que desea borrar a ${heroe.nombre}`,
    type: 'question',
    showConfirmButton: true,
    showCancelButton: true
    }).then( (resp: any) => {
       // sweatalert devuelve una promesa si es true has esto si no no hagas nada
       if (resp.value) {
             this.heroesService.deleteHeroe(heroe.id).subscribe((res: any) => {
               console.log('la res del servicio deleteHeroe es: ', res);
               this.heroes.splice(i, 1);
             });
       }
    });
  }

}
