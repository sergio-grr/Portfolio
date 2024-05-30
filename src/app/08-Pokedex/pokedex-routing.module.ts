
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Path } from 'leaflet';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes =[

  {
    path: '',
    component:HomePageComponent
  },{
  path: 'login',
  component:LoginPageComponent
},  {
    path: 'pokedex',
    component:PokedexPageComponent
  },



]

 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PokedexRoutingModule { }
