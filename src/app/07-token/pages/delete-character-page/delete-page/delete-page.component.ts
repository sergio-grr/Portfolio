import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../services/characters.service';
import { Fighters } from '../../../interfaces/characters.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.css']
})
export class DeletePageComponent implements OnInit {

  public fighters: Fighters[] = [];
  public characterForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    style: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    background: new FormControl('', Validators.required),
  });

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loadFighters();
  }

  loadFighters(): void {
    this.charactersService.getCharacters().subscribe((fighters: Fighters[]) => {
      this.fighters = fighters;
    });
  }

  get currentFighter(): Fighters {
    return this.characterForm.value as Fighters;
  }

  onDeleteHero(id: string): void {
    console.log('ID del luchador:', id);
    if (!id) throw new Error('Fighter Id is required');

    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No hay vuelta atrás!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, borrar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.charactersService.deleteCharacterById(id).subscribe((success: boolean) => {
          if (success) {
            Swal.fire({
              title: "¡Eliminado!",
              text: "El personaje ha sido borrado",
              icon: "success"
            });
            this.loadFighters(); // Recargar la lista de luchadores
          } else {
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al eliminar el personaje",
              icon: "error"
            });
          }
        });
      }
    });
  }
}
