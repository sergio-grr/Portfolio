import { NgModule } from '@angular/core';
import { PopulationPageComponent } from './pages/population-page/population-page.component';
import { PopulationRoutingModule } from './population-routing.module';
import { SearchComponent } from './components/search/search.component';
import { MapsComponent } from './components/maps/maps.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PopulationPageComponent,
    SearchComponent,
    MapsComponent,

  ],
  imports: [
    PopulationRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [PopulationPageComponent],
  providers: [],
})
export class PopulationModule {}
