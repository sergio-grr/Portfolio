import { Component, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { MunicipalityData } from '../../interfaces/community-interface';

@Component({
  selector: 'shows-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnChanges, AfterViewInit {
  // rebico los datos
  @Input() selectedMunicipality: MunicipalityData = { mun_name: '', geo_point_2d: { lat: 0, lon: 0 } };
  map!: mapboxgl.Map;
  marker!: mapboxgl.Marker;


// token acceso a maps
  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2lvZ3JyIiwiYSI6ImNsdnpnOWxybjA0ZWoyanBodG92anJveXEifQ.ZtN5TWahYVbAfF1q9QJ5Lg';
// creo el mapa
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-3.7038, 40.4168], // Coordenadas de Madrid
      zoom: 4
    });
// el marcador por defecto
    this.marker = new mapboxgl.Marker()
      .setLngLat([-3.7038, 40.4168]) // Coordenadas de Madrid
      .addTo(this.map);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedMunicipality'] && !changes['selectedMunicipality'].firstChange && this.selectedMunicipality && this.selectedMunicipality.geo_point_2d) {
      console.log('Datos recibidos:', this.selectedMunicipality); // Log para ver los datos recibidos
      const { lon, lat } = this.selectedMunicipality.geo_point_2d;
      this.marker.setLngLat([lon, lat]);
      // el mapa se mueve a la ubi
      this.map.flyTo({
        center: [lon, lat],
        zoom: 12,
        essential: true
      });
    }
  }
}
