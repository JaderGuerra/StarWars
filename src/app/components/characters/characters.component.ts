import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  //characters: string;
  //characters: any = {};
  constructor(private service: ApiService, private ar: ActivatedRoute) {

    const id = this.ar.snapshot.paramMap.get('id')
    console.log(id);
    this.service.characters(id).subscribe((resp: any) => {
      let promesas = resp.characters


      promesas.map((url) => {
        this.service.http.get(url).subscribe((resp: any) => {
          this.characters.push(resp)
        })
      })
    })



    /*   va bien
      let promesas = resp.characters
      Promise.all(promesas).then((resp: any) => {
        this.characters = resp
        console.log(this.characters);
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
