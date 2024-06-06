import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string = '';
  password: string = '';
  adminAccess: boolean = false;

  constructor(private router: Router) { }

  login(): void {
    if (this.user === 'admin' && this.password === 'admin') {
      this.adminAccess = true;
      localStorage.setItem('adminAccess', 'true')
      this.router.navigateByUrl('token/database');
    } else {
      Swal.fire({
        title: "Acceso no autorizado",
        width: 600,
        padding: "3em",
        color: "#F51300",
        backdrop: `
          rgba(255, 0, 21, 0.8)
        `,
        showConfirmButton: false,
        timer: 2500
      });

    }
  }

}
