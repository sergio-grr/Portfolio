import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { MaintokenComponent } from './maintoken/maintoken.component';
import { TokenRoutingModule } from './token-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { UserComponent } from './Components/user/user.component';
import { ModalTokenComponent } from './Components/modal/modaltoken/modaltoken.component';
import { AdminComponent } from './Components/admin/admin.component';


@NgModule({
  declarations: [
    MaintokenComponent,
    MenuComponent,
    UserComponent,
    AdminComponent ,
    ModalTokenComponent,
  ],
  imports: [
    CommonModule,
    TokenRoutingModule,
    MatDialogModule,

  ],
  exports: [
    MaintokenComponent,
  ],
  providers: [

  ],

})
export class TokenModule { }
