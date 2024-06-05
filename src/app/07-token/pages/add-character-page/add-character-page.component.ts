import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CharactersService } from '../../services/characters.service';
import { Fighters } from '../../interfaces/characters.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-character-page',
  templateUrl: './add-character-page.component.html',
  styleUrls: ['./add-character-page.component.css']
})
export class AddCharacterPageComponent {

  public characterForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    style: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    background: new FormControl('', Validators.required),
  });

  constructor(private characterService: CharactersService) { }

  get currentFighter(): Fighters {
    const fighters = this.characterForm.value as Fighters;
    return fighters
  }

  onSubmit(): void {
    if (this.characterForm.invalid) return;

    const id = this.currentFighter.id.trim();
    if (id) {
      this.characterService.getCharactersById(id).subscribe({
        next: (existingFighter) => {
          if (existingFighter) {
            this.showErrorAlert('El personaje ya existe');
          } else {
            // Si el personaje no existe, entonces añadirlo
            this.addCharacter();
          }
        },
        error: () => {
          // Si hay un error al verificar, mostrar una alerta de error
          this.showErrorAlert('Error al verificar el personaje');
        }
      });
    }
  }

  addCharacter(): void {
    this.characterService.addCharacter(this.currentFighter).subscribe({
      next: () => {
        // Si se añade correctamente, mostrar una alerta de éxito y resetear el formulario
        this.showSuccessAlert();
        this.resetForm();
      },
      error: () => {
        // Si hay un error al añadir, mostrar una alerta de error
        this.showErrorAlert('Error al añadir el personaje');
      }
    });
  }

  showSuccessAlert(): void {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Personaje añadido",
      showConfirmButton: false,
      timer: 2500,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  showErrorAlert(message: string): void {
    Swal.fire({
      position: "top",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 2500,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  resetForm(): void {
    this.characterForm.reset();
  }
}
