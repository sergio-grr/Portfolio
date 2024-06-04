import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CharactersService } from '../../services/characters.service';
import { Fighters } from '../../interfaces/characters.interface';
isNaN

@Component({
  selector: 'app-add-character-page',
  templateUrl: './add-character-page.component.html',
  styleUrls: ['./add-character-page.component.css']
})
export class AddCharacterPageComponent  {

  public characterForm = new FormGroup({

    id:         new FormControl (''),
    name:       new FormControl (''),
    country:    new FormControl (''),
    style:      new FormControl (''),
    img:        new FormControl (''),
    background: new FormControl ('')
  });


  constructor(
    private characterService: CharactersService

  ){}
  get currentFighter(): Fighters {
    const fighers = this.characterForm.value as Fighters;
    return fighers;
  }

  onSubmit():void{

    if( this.characterForm.invalid) return;

    if( this.currentFighter.id) {
        this.characterService.addCharacter ( this.currentFighter)
        .subscribe( fighters => {
          //TODO:mostrar snakbars
        });

        return;
    }

    this.characterService.addCharacter(this.currentFighter)
    .subscribe( fighters => {
      //TODO:mostrar snakbars de que se ha creado bien
    });



  }
}



