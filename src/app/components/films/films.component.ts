import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  peliculas: any[];

  constructor(public api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data: any) => {
      this.peliculas = data.results;

    });
  }

  verPersonajes(id: string) {

    this.router.navigate(['/films', id])
  }
}
