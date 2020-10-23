import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPersonajes'
})
export class FiltroPersonajesPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {

    console.log(lista);
    if (!texto) {
      return lista
    }
    return lista.filter((resp) => resp.name.toUpperCase().includes(texto.toUpperCase()))
  }

}
