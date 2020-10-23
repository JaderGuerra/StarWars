import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from "@angular/router";
import { strict } from 'assert';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  peliculas: any[] = []
  page = 1;
  pageSize = 10;
  load: boolean;

  mostrar: boolean = false;
  filtro_valor = '';

  constructor(private service: ApiService, private ar: ActivatedRoute) {
    this.load = true;
    const id = this.ar.snapshot.paramMap.get('id')

    this.service.characters(id).subscribe((resp: any) => {
      let promesas = resp.characters
      promesas.map((urls: string) => {

        this.service.http.get(urls).subscribe((character: any) => {
          this.characters.push(character)
          this.load = false;
        })

      })
    })





    /* this.service.characters(id).subscribe((respApis: any) => {
      let promesas = respApis.characters
      Promise.all(promesas).then((resp: any) => {
        this.characters = resp
        console.log(resp);
      })
    }) */

    /* this.ar.params.subscribe((params) => {
      console.log(params);
      this.characters = this.service.characters(params['id'])
      console.log(this.characters);
    }) */

  }

  ngOnInit(): void { }

  buscar(value: string) {

    this.filtro_valor = value;
  }


}
