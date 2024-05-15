import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherData } from '../../interfaces/weather.interface';
import { ForecastData,  } from '../../interfaces/Forecast.interface';
import { WeatherService } from '../../services/weather.service';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'weather-page',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})


export class WeatherPageComponent implements OnInit {



  @ViewChild('sidenav') sidenav!: MatSidenav;

  weather: WeatherData | undefined;
  forecastData: ForecastData | undefined;
  error: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { }

  handleSearchCity(weatherData: WeatherData) {
    this.weather = weatherData;
  }

  handleSearchCityForecast(forecastData: ForecastData) {
    this.forecastData = forecastData;
  }
  goBack(): void {
    history.back();
  }
}
