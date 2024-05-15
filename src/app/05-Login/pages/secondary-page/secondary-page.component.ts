import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-page',
  templateUrl: './secondary-page.component.html',
  styleUrls: ['./secondary-page.component.css']
})
export class SecondaryPageComponent implements OnInit {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    this.isLoggedIn = false;
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    
  }

  navigateToHome() {
    this.router.navigateByUrl('/login');
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login/log');
  }

}
