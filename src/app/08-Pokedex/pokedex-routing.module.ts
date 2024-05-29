
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeMainPageComponent } from './pages/poke-main-page/poke-main-page.component';
import { Path } from 'leaflet';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes =[

  {
    path: '',
    component: PokeMainPageComponent
  }, {
    path: 'home',
    component: HomePageComponent
  },




]

 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PokedexRoutingModule { }
