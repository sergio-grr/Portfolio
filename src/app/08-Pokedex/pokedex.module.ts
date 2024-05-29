import { NgModule } from '@angular/core';
import { PokeMainPageComponent } from './pages/poke-main-page/poke-main-page.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { BorderYellowComponent } from './components/border-yellow/border-yellow.component';
import { BorderBlackComponent } from './components/border-black/border-black.component';
import { ScreenComponent } from './components/screen/screen.component';
import { ArrowsComponent } from './components/arrows/arrows.component';
import { ButtonsComponent } from './components/buttons/buttons.component';



@NgModule({
  declarations: [
    PokeMainPageComponent,

    BorderYellowComponent,
    BorderBlackComponent,
    ScreenComponent,
    ArrowsComponent,
    ButtonsComponent,
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
