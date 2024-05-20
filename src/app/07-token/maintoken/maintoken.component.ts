import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintoken',
  templateUrl: './maintoken.component.html',
  styleUrls: ['./maintoken.component.css']
})
export class MaintokenComponent {


  constructor(
    private router: Router,

  ) { }

  navigateToMenu() {
    this.router.navigateByUrl('/token/menu');
  }

}


