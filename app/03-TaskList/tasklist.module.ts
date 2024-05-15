import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ShowComponent } from './components/show/show.component';
import { AddComponent } from './components/add/add.component';
import { TaskService } from './services/tasklist.service';
import { MainPageComponent } from './pages/main-page.component';
import { TaskListRoutingModule } from './taskList-routing.module';




@NgModule({
  declarations: [
    MainPageComponent,
    ShowComponent,
    AddComponent,

  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskListRoutingModule

  ],
  providers: [
    TaskService
  ]
})
export class TasklistModule { }
