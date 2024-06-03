import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokemonAllData } from '../../interfaces/PokemonAllData';
import { translateTypeName, translateAbilityName } from '../../utils/translation-utils'; // Importa las funciones de traducción

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.css']
})
export class ModalPokemonComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalPokemonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PokemonAllData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // Función para traducir el nombre del tipo
  translateTypeName(typeName: string): string {
    return translateTypeName(typeName);
  }

  // Función para traducir el nombre de la habilidad
  translateAbilityName(abilityName: string): string {
    return translateAbilityName(abilityName);
  }
}
