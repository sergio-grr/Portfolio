import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../interfaces/weather.interface';
import { ForecastData } from '../../interfaces/Forecast.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() weatherData = new EventEmitter<WeatherData>();
  @Output() forecastData = new EventEmitter<ForecastData>();
  searchText: string = '';
  showElement: boolean = true; // Variable para controlar la visualización del elemento

  constructor(private weatherService: WeatherService) {}

  onSearch(): void {
    this.weatherService.getWeather(this.searchText).subscribe((weather: WeatherData) => {
      console.log('Datos meteorológicos recibidos:', weather);
      this.weatherData.emit(weather);
      this.showElement = false; // Ocultar el elemento después de realizar la búsqueda
    });

    this.weatherService.getForecast(this.searchText).subscribe((forecast: ForecastData) => {
      console.log('Datos de previsión recibidos:', forecast);
      this.forecastData.emit(forecast);
      this.showElement = false; // Ocultar el elemento después de realizar la búsqueda
    });

    this.searchText = '';
  }
}
