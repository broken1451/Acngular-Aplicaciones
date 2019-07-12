import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroes.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  public heroe: HeroeModel;

  constructor(private heroesService: HeroesService) {
    this.heroe = new HeroeModel();
  }


  ngOnInit() {
  }



  guardar(formulario: NgForm) {
    console.log('El formulario: ', formulario);
    console.log('this.heroes: ', this.heroe);

    if (formulario.invalid) {
        console.log('formulario Invalido');
        return;
    }

    this.heroesService.crearHeroe(this.heroe).subscribe((res: any) => {
      this.heroe = res;
      console.log('La res del servicio crearheroe es: ', res);
    });


  }


}
