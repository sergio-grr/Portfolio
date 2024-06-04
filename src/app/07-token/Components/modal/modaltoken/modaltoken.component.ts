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
  constructor(
    public dialogRef: MatDialogRef<ModalTokenComponent>,
    @Inject(MAT_DIALOG_DATA) public fighter: Fighters
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
