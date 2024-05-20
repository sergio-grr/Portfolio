import { Component } from '@angular/core';
import { TokenService } from '../../../services/token.service';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-token-user',
  templateUrl: './tokenUser.component.html',
  styleUrls: ['./tokenUser.component.css'],
})
export class TokenUserComponent {

  tokenUser: string = '';

  constructor(private router: Router, private tokenService: TokenService) {}

  loginUser(): void {
    const user = {};
    this.tokenService.getTokenUser().subscribe(
      (data: User) => {
        console.log('User Token:', data.result.token);
        localStorage.setItem('token', data.result.token);
        this.router.navigateByUrl('/token/menu');

      },
      (error: any) => {
        console.error('Login error:', error);
      }
    );

  }
}
