
import { Component, OnInit } from '@angular/core';
import { MunicipalityData } from '../../interfaces/community-interface';

@Component({
  selector: 'app-population-page',
  templateUrl: './population-page.component.html',
  styleUrls: ['./population-page.component.css']
})
export class PopulationPageComponent  {
  showSpinner = true;
  selectedMunicipality: MunicipalityData = {mun_name: '', geo_point_2d: {lat: 0, lon: 0}};

  constructor() { }



  goBack(): void {
    history.back();
  }

  onMunicipalitySelected(municipality: MunicipalityData) {
    this.selectedMunicipality = municipality;
  }
}
