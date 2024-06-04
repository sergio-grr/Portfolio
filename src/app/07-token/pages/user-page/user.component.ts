import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTokenComponent } from '../../Components/modal/modaltoken/modaltoken.component';
import { CharactersService } from '../../services/characters.service';
import { Fighters } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userToken: string = '';
  public fighters: Fighters[] = [];

  constructor(
    public dialog: MatDialog,
    private charactersService: CharactersService,
  )
  { this.loadFighters();

  }

  ngOnInit(): void {
    this.charactersService.getCharacters()
      .subscribe(fighters => this.fighters = fighters);
  }

  loadFighters(): void {
    this.charactersService.getCharacters().subscribe((fighters: Fighters[]) => {
      this.fighters = fighters;
    });
  }
  openDialog(fighter: Fighters): void {
    const dialogRef = this.dialog.open(ModalTokenComponent, {
      data: fighter
    });


  }




}

// openDialog(playerData: { name: string; country: string; style: string; img: string }): void {
//   this.dialog.open(ModalTokenComponent, {
//     data: playerData
//   });
// }

