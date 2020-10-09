import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  peliculas: any[];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data: any) => {
      this.peliculas = data.results;

    });
  }
  ver(e) {
    console.log(e.characters);
  }
}
