import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { WeatherPageComponent } from "./pages/main-pages/main-pages.component";

const routes: Routes = [
  { path: '', component: WeatherPageComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WheaterRoutingModule {}

