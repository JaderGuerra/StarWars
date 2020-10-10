import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(public http: HttpClient) { }
  getData() {
    return this.http.get('https://swapi.dev/api/films/');
  }

  characters(id: string) {

    // return this.http.get(`https://swapi.dev/api/people/${id}`)

    return this.http.get(`https://swapi.dev/api/films/${id}`);
  }
}
