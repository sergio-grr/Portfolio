import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PopulationPageComponent } from './pages/population-page/population-page.component';


const routes: Routes = [
  { path: '', component: PopulationPageComponent },
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopulationRoutingModule {}

