import { MaintokenComponent } from './maintoken/maintoken.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu-page/menu.component';
import { UserComponent } from './pages/user-page/user.component';
import { AdminComponent } from './pages/admin-page/admin.component';
import { TokenGuard } from './guards/tokenadmin.guard';

import { AddCharacterPageComponent } from './pages/add-character-page/add-character-page.component';
import { DeletePageComponent } from './pages/delete-character-page/delete-page/delete-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { RestorePageComponent } from './pages/restore-page/restore-page.component';
import { DatabasePageComponent } from './pages/database-page/database-page.component';
import { AdminGuard } from './guards/admin.guard';

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
  },{
    path: 'delete',
    component: DeletePageComponent, canActivate: [
       TokenGuard
    ]
  },{
    path: 'edit',
    component: EditPageComponent, canActivate: [
       TokenGuard
    ]
  },{
    path: 'restore',
    component: RestorePageComponent, canActivate: [
       TokenGuard
    ]
  },{
    path: 'database',
    component: DatabasePageComponent, canActivate: [
      AdminGuard
    ]
  },





]

 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TokenRoutingModule { }
