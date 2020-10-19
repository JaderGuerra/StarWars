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




  }

  ngOnInit(): void { }

}
