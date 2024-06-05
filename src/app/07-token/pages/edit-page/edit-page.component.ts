import { Component, OnInit } from '@angular/core';
import { Fighters } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  public fighters: Fighters[] = [];
  public selectedFighterId: string | null = null;
  public selectedFighter: Fighters | undefined;

  public characterForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    style: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    background: new FormControl('', Validators.required),
  });


  constructor(private charactersService: CharactersService) { }

  get currentFighter(): Fighters {
    const fighters = this.characterForm.value as Fighters;
    return fighters
  }

  ngOnInit(): void {
    this.loadFighters();
  }

  loadFighters(): void {
    this.charactersService.getCharacters().subscribe((fighters: Fighters[]) => {
      this.fighters = fighters;
    });
  }

  onSelectFighter(): void {
    this.selectedFighter = this.fighters.find(fighter => fighter.id === this.selectedFighterId);
    if (this.selectedFighter) {
      this.characterForm.patchValue({
        id: this.selectedFighter.id,
        name: this.selectedFighter.name,
        country: this.selectedFighter.country,
        style: this.selectedFighter.style,
        img: this.selectedFighter.img,
        background: this.selectedFighter.background,
      });
    }
  }

  saveChanges(): void {
    if (this.characterForm.valid) {
      const updatedFighter = this.characterForm.value as Fighters;
      this.charactersService.editCharacter(updatedFighter).subscribe(
        (response) => {
          console.log('Character updated successfully:', response);
          this.loadFighters();
          this.showSuccessAlert();
          this.resetForm();


        },
        (error) => {

        }
      );
    } else {
      console.error('Form is invalid');
       this.showErrorAlert('Error al editar el personaje');
    }
  }


  showSuccessAlert(): void {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Cambios guardados con éxito",
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
