import { MaintokenComponent } from './maintoken/maintoken.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { UserComponent } from './pages/user-page/user.component';
import { AdminComponent } from './pages/admin-page/admin.component';
import { TokenGuard } from './guards/tokenadmin.guard';

import { AddCharacterPageComponent } from './pages/add-character-page/add-character-page.component';

const routes: Routes =[

  {
    path: 'log',
    component: MaintokenComponent,
  },{
    path: 'menu',
    component: MenuComponent,
  },{
    path: 'user',
    component: UserComponent,
  },{
    path: 'admin',
    component: AdminComponent, canActivate: [
       TokenGuard
    ]
  },{
    path: 'add',
    component: AddCharacterPageComponent, canActivate: [
       TokenGuard
    ]
  },





]

 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TokenRoutingModule { }
