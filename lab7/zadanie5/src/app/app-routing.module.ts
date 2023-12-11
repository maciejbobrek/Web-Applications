// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteCountriesComponent } from './favorite-countries/favorite-countries.component';

const routes: Routes = [
  { path: '', component: FavoriteCountriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }