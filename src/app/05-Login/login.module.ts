import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LogRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SecondaryPageComponent } from './pages/secondary-page/secondary-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SecondaryPageComponent

  ],
  imports: [
    LogRoutingModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    HomeComponent],
  providers: [CookieService],
})
export class LoginModule { }
