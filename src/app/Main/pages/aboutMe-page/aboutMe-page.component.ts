import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutMe-page',
  templateUrl: './aboutMe-page.component.html',
  styleUrls: ['./aboutMe-page.component.css']
})
export class AboutMePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
// métodos para moverse por las páginas
navigateToContactPage() {
  this.router.navigateByUrl('/contact');
};

navigateToAboutMePage() {
  this.router.navigateByUrl('/aboutMe');
};

navigateToProyectPage() {
  this.router.navigateByUrl('/proyect');
};



}
