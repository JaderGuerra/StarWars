import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { FilmsComponent } from './components/films/films.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'films' },
  { path: 'films', component: FilmsComponent },
  { path: 'characters/:id', component: CharactersComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'films' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
