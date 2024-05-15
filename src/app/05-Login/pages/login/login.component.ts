import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  showElement: boolean = false;

  constructor(private router: Router) {}

  login(): void {
    if (this.email && this.password) {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('email', this.email);
      sessionStorage.setItem('password', this.password);
      this.isLoggedIn = true;
      this.showElement = true;
    } else {
      alert('Por favor, ingrese ambos campos');
    }
  }

  navigateToHome() {
    this.router.navigateByUrl('/login');
  }

  navigateToSecondary() {
    this.router.navigateByUrl('/login/secondary');
  }

}

// Realizar la llamada al servicio para obtener un token por el usuario ====> eve.holt@reqres.in
// y te devuelve el token.

// login() {
//   const user = { email: this.email, password: this.password };
//   this.userService.login(user).subscribe(
//     data => {
//       this.userService.setToken(data.token);
//       this.router.navigateByUrl('/');
//     },
//     error => {
//       console.log(error);
//     });
// }
