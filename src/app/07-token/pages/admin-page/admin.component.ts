import { Component,  } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showCards: boolean = false;

  constructor() { }

  toggleCards() {
    this.showCards = !this.showCards;
  }

}




