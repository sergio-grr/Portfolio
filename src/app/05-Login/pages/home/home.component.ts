import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private router: Router) { }


  navigateToLog() {
    this.router.navigateByUrl('/log');
  }

  navigateToSecondary() {
    this.router.navigateByUrl('/secondary');
  }

  navigateToExit() {
    this.router.navigateByUrl('')
  }

}
