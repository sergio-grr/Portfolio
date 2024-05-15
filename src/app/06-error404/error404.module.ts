import { NgModule } from '@angular/core';
import { Error404Component } from './error-404/error-404.component';
import { Error404RoutingModule } from './error404-routing.module';



@NgModule({
  declarations: [
    Error404Component,
  ],
  imports: [
    Error404RoutingModule,
  ],
  exports: [
    Error404Component,
  ],

  providers: [],
})
export class Error404Module { }
