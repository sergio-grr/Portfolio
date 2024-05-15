import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(
    private router: Router,

  ) { }


  navigateToContactPage() {
    this.router.navigateByUrl('/contact');
  }

  navigateToAboutMePage() {
    this.router.navigateByUrl('/aboutMe');
  }

  navigateToProyectPage() {
    this.router.navigateByUrl('/proyect');
  }


}
