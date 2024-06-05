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
    return this.characterForm.value as Fighters;
  }


  onSubmit(): void {
    if (this.characterForm.invalid) return;


    if (this.currentFighter.id) {
      this.characterService.getCharactersById(this.currentFighter.id).subscribe(existingFighter => {
        if (existingFighter) {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "El personaje ya existe",
            showConfirmButton: false,
            timer: 2500,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
        } else {
          this.addCharacter();
        }
      });
    }
  }

  private addCharacter(): void {
    this.characterService.addCharacter(this.currentFighter).subscribe(() => {
      this.showSuccessAlert();
      this.resetForm();
    });
  }

  private showSuccessAlert(): void {
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

  private resetForm(): void {
    this.characterForm.reset();
  }
}
