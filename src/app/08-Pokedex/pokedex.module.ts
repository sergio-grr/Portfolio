import { NgModule } from '@angular/core';
import { PokeMainPageComponent } from './pages/poke-main-page/poke-main-page.component';
import { PokedexRoutingModule } from './pokedex-routing.module';


import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    PokeMainPageComponent,
    HomePageComponent,

  ],
  imports: [
    PokedexRoutingModule,

  ],
  exports: [
    PokeMainPageComponent
  ],
  providers: [

  ],
})
export class PokedexModule { }
