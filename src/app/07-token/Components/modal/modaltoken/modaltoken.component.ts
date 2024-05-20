// player-modal.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-player-modal',
  templateUrl: './modaltoken.component.html',
  styleUrls: ['./modaltoken.component.css']
})
export class ModalTokenComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalTokenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; country: string; style: string; img: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
