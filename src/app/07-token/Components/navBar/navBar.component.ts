import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { UserTokenLogin } from '../../interfaces/userTokenLogin';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public tokenService : TokenService) { }

  ngOnInit() {
    this.tokenService.getVerifyToken().subscribe((data) => {
      this.userLogin=data.result.userLogin
      console.log(this.userLogin.rol);
     })
  }
  userLogin  : UserTokenLogin | undefined


}
