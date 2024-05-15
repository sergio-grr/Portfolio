import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryData } from '../../interfaces/country.interface';

@Component({
  selector: 'app-Modal',
  templateUrl: './Modal.component.html',
  styleUrls: ['./Modal.component.css']
})
export class ModalComponent {
  public data: CountryData;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.data = data as CountryData;
  }

  getCurrencies(): { name: string, symbol: string }[] {
    return Object.values(this.data.currencies);
  }

  getLanguages(): { name: string }[] {
    return Object.values(this.data.languages).map(language => ({ name: language }));
  }
}
