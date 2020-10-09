import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  //characters: any = {};
  constructor(private service: ApiService, private ar: ActivatedRoute) {

    const id = this.ar.snapshot.paramMap.get('id')
    this.service.characters(id).subscribe((c: any) => {
      console.log(c.characters);
      // this.characters = c;
      this.characters = c.characters;

    })

    /* this.ar.params.subscribe((params) => {
      console.log(params);
      this.characters = this.service.characters(params['id'])
      console.log(this.characters);
    }) */

  }

  ngOnInit(): void {



  }


}
