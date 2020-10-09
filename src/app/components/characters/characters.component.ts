import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  //characters: string[] = [];
  characters: any = {};
  constructor(private service: ApiService, private ar: ActivatedRoute) {


    const id = this.ar.snapshot.paramMap.get('id')
    this.service.characters(id).subscribe((c) => {
      console.log(c);

    })
    /* this.ar.paramMap.subscribe((params) => {

      this.characters = this.service.characters(params['id'])
      console.log(this.characters);
    }) */
  }

  ngOnInit(): void {
    // console.log(this.ar);

  }


}
