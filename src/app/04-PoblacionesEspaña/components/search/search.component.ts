import { Component, EventEmitter, Output } from '@angular/core';
import { PopulationService } from '../../services/population.service';
import { MapData, MunicipalityData } from '../../interfaces/community-interface';

@Component({
  selector: 'search-map',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() municipalitySelected = new EventEmitter<MunicipalityData>();
  selectedCommunity: string = '';
  selectedProvince: string = '';
  selectedMunicipality: MunicipalityData = { mun_name: '', geo_point_2d: { lat: 0, lon: 0 } };
  communities: MapData[] = [];
  provinces: MapData[] = [];
  municipalities: MapData[] = [];

  constructor(private populationService: PopulationService) {}

  ngOnInit(): void {
    this.getCommunities();
  }

// obtengo las ccaa y la selección

  getCommunities(): void {
    this.populationService.getCommunity().subscribe((data: any) => {
      if (data && data.results) {
        this.communities = data.results;
      }
    });
  }

  onSelectCommunity(): void {
    if (this.selectedCommunity) {
      this.getProvincesByCommunity(this.selectedCommunity);
    }
  }

// obtengo las provincias y la selección
  getProvincesByCommunity(selectedCommunity: string): void {
    this.populationService.getProvincesByCommunity(selectedCommunity).subscribe((data: any) => {
      if (data && data.results) {
        this.provinces = data.results;
        this.selectedProvince = '';
        this.municipalities = [];
      }
    });
  }

  onSelectProvince(): void {
    if (this.selectedProvince) {
      this.getMunicipalitiesByProvince(this.selectedProvince);
    }
  }

// obtengo el municipio
  getMunicipalitiesByProvince(selectedProvince: string): void {
    this.populationService.getMunicipality(selectedProvince).subscribe((data: any) => {
      if (data && data.results) {
        this.municipalities = data.results;
      }
    });
  }
// emito la selección al componente maps
  onSelectMunicipality(municipality: MunicipalityData): void {
    this.selectedMunicipality = municipality;
    this.municipalitySelected.emit(this.selectedMunicipality);
  }
}
