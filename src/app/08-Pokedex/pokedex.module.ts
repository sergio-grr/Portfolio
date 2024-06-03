import { NgModule } from '@angular/core';

import { PokedexRoutingModule } from './pokedex-routing.module';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogComponent } from './components/log/log.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ModalPokemonComponent } from './components/modal-pokemon/modal-pokemon.component';



@NgModule({
  declarations: [
    HomePageComponent,
    PokedexPageComponent,
    LoginPageComponent,

    NavbarComponent,
    LogComponent,
    SearchBarComponent,
    ModalPokemonComponent

  ],
  imports: [
    PokedexRoutingModule,
    FormsModule,
    CommonModule,
    InfiniteScrollModule,

  ],
  exports: [
    HomePageComponent
  ],
  providers: [

  ],
})
export class PokedexModule { }
