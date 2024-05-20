import { Component,} from '@angular/core';
import { ModalTokenComponent } from '../../Components/modal/modaltoken/modaltoken.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-User',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userToken: string = '';


  constructor(
    public dialog: MatDialog,

  ) { }

  openDialog(playerData: { name: string; country: string; style: string; img: string }): void {
    this.dialog.open(ModalTokenComponent, {
      data: playerData
    });
  }


}
