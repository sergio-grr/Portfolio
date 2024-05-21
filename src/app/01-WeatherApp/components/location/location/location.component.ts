import { Component, AfterViewInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements AfterViewInit {
  map!: mapboxgl.Map;
  marker!: mapboxgl.Marker;

  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2lvZ3JyIiwiYSI6ImNsdnpnOWxybjA0ZWoyanBodG92anJveXEifQ.ZtN5TWahYVbAfF1q9QJ5Lg';

    this.map = new mapboxgl.Map({
      container: 'map',
      center: [-6.37238027482813, 39.473963976333124], // Coordenadas Cáceres
      zoom: 9
    });

    this.marker = new mapboxgl.Marker()
      .setLngLat([-6.37238027482813, 39.473963976333124]) // Coordenadas Cáceres
      .addTo(this.map);
  }
}
