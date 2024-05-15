import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { CountryMainComponent } from "./pages/country-main/country-main.component";

const routes: Routes = [
  { path: '', component: CountryMainComponent },

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
export class CountryRoutingModule {}
