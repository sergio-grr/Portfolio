
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { MaintokenComponent } from './maintoken/maintoken.component';
import { TokenRoutingModule } from './token-routing.module';
import { MenuComponent } from './pages/menu-page/menu.component';
import { UserComponent } from './pages/user-page/user.component';
import { ModalTokenComponent } from './Components/modal/modaltoken/modaltoken.component';
import { AdminComponent } from './pages/admin-page/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenAdminComponent } from './Components/tokenAdmin/tokenAdmin/tokenAdmin.component';
import { TokenUserComponent } from './Components/tokenUser/tokenUser/tokenUser.component';
import { JwtInterceptor } from './services/interceptor/jwt.interceptor.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './Components/navBar/navBar.component';
import { SpinnerComponent } from './Components/spinner/spinner/spinner.component';
import { AddCharacterPageComponent } from './pages/add-character-page/add-character-page.component';
import { DeletePageComponent } from './pages/delete-character-page/delete-page/delete-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { RestorePageComponent } from './pages/restore-page/restore-page.component';
import { LoginComponent } from './Components/login/login.component';
import { DatabasePageComponent } from './pages/database-page/database-page.component';



@NgModule({
  declarations: [
    MaintokenComponent,
    MenuComponent,
    UserComponent,
    AdminComponent,
    AddCharacterPageComponent,
    DeletePageComponent,
    EditPageComponent,
    RestorePageComponent,
    DatabasePageComponent,

    LoginComponent,
    ModalTokenComponent,
    TokenAdminComponent,
    TokenUserComponent,
    NavBarComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    TokenRoutingModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  exports: [
    MaintokenComponent,
  ],
  providers: [

  ],

})
export class TokenModule { }
