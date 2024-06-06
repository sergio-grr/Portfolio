import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from './07-token/services/interceptor/jwt.interceptor.service';
import { SpinnerInterceptor } from './07-token/services/interceptor/spinner.interceptor.service';
import { TokenGuard } from './07-token/guards/tokenadmin.guard';
import { AdminGuard } from './07-token/guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,



  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true},
  { provide: HTTP_INTERCEPTORS, useClass:SpinnerInterceptor, multi: true},
  TokenGuard,
  AdminGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
