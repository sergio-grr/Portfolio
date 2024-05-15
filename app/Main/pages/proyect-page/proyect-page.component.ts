import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyect-page',
  templateUrl: './proyect-page.component.html',
  styleUrls: ['./proyect-page.component.css']
})
export class ProyectPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

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
