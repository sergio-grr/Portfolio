import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  login(): void {
    if (this.email && this.password) {
      this.isLoggedIn = true;
      this.router.navigateByUrl('pokedex/pokedex');
    } else {
      Swal.fire({
        title: "Debes rellenar todos los campos.",
        width: 600,
        color: "#ffffff",
        background: "url(../../../../assets/pokedex/background.jpg) center / cover", // Ajusta el fondo
        backdrop: `
          rgba(0, 0, 0, 0.4)
          url(../../../../assets/pokedex/gengar.gif)
          bottom center
          no-repeat
        `
      });



    }
  }
}
