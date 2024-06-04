// player-modal.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Fighters } from '../../../interfaces/characters.interface';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-player-modal',
  templateUrl: './modaltoken.component.html',
  styleUrls: ['./modaltoken.component.css']
})
export class ModalTokenComponent {

  public fighters: Fighters[] = [];
  private charactersService: CharactersService | undefined;

  constructor(
    public dialogRef: MatDialogRef<ModalTokenComponent>,
    @Inject(MAT_DIALOG_DATA) public fightersData: Fighters[]
  ) {};


  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
