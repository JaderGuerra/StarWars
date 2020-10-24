import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPersonajes'
})
export class FiltroPersonajesPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {

    if (!texto) return lista

    return lista.filter((resp) => {
      const filterGender = resp.gender.toUpperCase().includes(texto.toUpperCase());
      const filterEyeColors = resp.eye_color.toUpperCase().includes(texto.toUpperCase());
      return (filterGender || filterEyeColors)
      /* return (resp.eye_color.toUpperCase().includes(texto.toUpperCase()) || resp.gender.toUpperCase().includes(texto.toUpperCase())) */
    })

  }

}
