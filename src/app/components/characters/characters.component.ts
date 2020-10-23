import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from "@angular/router";

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

  peliculasName: any[] = []

  constructor(private service: ApiService, private ar: ActivatedRoute) {

    const id = this.ar.snapshot.paramMap.get('id')

    this.service.characters(id).subscribe((resp: any) => {
      let promesas = resp.characters
      promesas.map((urls: string) => {

        this.service.http.get(urls).subscribe((character: any) => {
          this.characters.push(character)
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

  /* private array(personajes: object) {
    if (personajes === null) {
      return [];
    }
    Object.keys(personajes).forEach((key) => {
      const character = personajes[key]

      this.characters.push(character)
    })
    return this.characters

  } */
}
