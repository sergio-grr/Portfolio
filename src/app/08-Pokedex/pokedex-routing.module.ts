
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeMainPageComponent } from './pages/poke-main-page/poke-main-page.component';


const routes: Routes =[

  {
    path: '',
    component: PokeMainPageComponent
  },




]

 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PokedexRoutingModule { }
