import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { TaskService } from '../services/tasklist.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tasklist-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(
    public tasklistService: TaskService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  taskList: Task[] = [];
  taskDone: Task[] = [];
  taskDoing: Task[] = [];

  getTask() {
    this.taskList = this.tasklistService.getTasks();

    this.taskList.forEach(item => {
      if (item.completed) {
        this.taskDone.push(item);
      } else {
        this.taskDoing.push(item);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  resetTasks(): void {
    
    this.tasklistService.resetTasks();
  }
}
