import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {
    console.log('listas del pipe filtroCompletado: ', listas);
    console.log('completada del pipe filtroCompletado: ', completada);

    const list = listas.filter((lista) => {
      console.log('listas.filter(lista) del pipe filtroCompletado: ', lista);
      return lista.terminada === completada;
    });

    return list;
  }

}
