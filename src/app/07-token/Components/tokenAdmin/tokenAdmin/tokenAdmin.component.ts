import { Component } from '@angular/core';
import { TokenService } from '../../../services/token.service';
import { Router } from '@angular/router';
import { Admin } from '../../../interfaces/admin.interface';

@Component({
  selector: 'app-token-admin',
  templateUrl: './tokenAdmin.component.html',
  styleUrls: ['./tokenAdmin.component.css'],
})
export class TokenAdminComponent {

  tokenAdmin: string = '';


  constructor(private router: Router, private tokenService: TokenService) {}

  loginAdmin(): void {
    const admin = { };
    this.tokenService.getTokenAdmin().subscribe(
      (data: Admin) => {
        console.log('Admin Token:', data.result.token);
        localStorage.setItem('token', data.result.token);
        this.router.navigateByUrl('/token/menu');

      },
      (error: any) => {
        console.error('Login error:', error);
      }
    );
  }
}
