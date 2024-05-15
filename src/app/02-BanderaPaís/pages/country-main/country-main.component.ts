import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryData } from '../../interfaces/country.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/Modal/Modal.component';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-country-main',
  templateUrl: './country-main.component.html',
  styleUrls: ['./country-main.component.css']
})
export class CountryMainComponent implements OnInit {
  countries: CountryData[] = [];

  constructor(private countryService: CountryService,
              private dialog: MatDialog,
              private location: Location) { }

  ngOnInit(): void {

    this.getAllFlags();
  }

  getAllFlags(): void {
    this.countryService.getAllFlags()
      .subscribe(
        (countries: CountryData[]) => {
          console.log(countries);
          this.countries = countries;
        },
        (error) => {
          console.error('Error al obtener las banderas de los países:', error);
        }
      );
  }

  openCountryDialog(country: CountryData): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: country
    });


  }

  goBack(): void {
    this.location.back();
  }
}
