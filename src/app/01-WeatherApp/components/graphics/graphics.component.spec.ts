import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GraphicsComponent } from "./graphics.component";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ForecastData } from '../../interfaces/Forecast.interface';


describe('Graphics component', () => {
  let component: GraphicsComponent;
  let fixture: ComponentFixture<GraphicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        GraphicsComponent,
      ],
      providers:[

      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {  //generar el component
    expect(component).toBeTruthy();
  });

  it('should generate chart data', () => { //generar los datos del gráfico
    const forecastData: ForecastData = {
      city: {
        id: 1,
        name: 'CityName',
        coord: { lon: 0, lat: 0 },
        country: 'Country',
        population: 100000,
        timezone: 0
      },
      cod: '200',
      message: 0,
      cnt: 5,
      list: [
        {
          dt: 1622116800, temp: {
            max: 25, min: 15,
            day: 0,
            night: 0,
            eve: 0,
            morn: 0
          }, humidity: 80, weather: [],
          sunrise: 0,
          sunset: 0,
          feels_like:  {
            day:0,
            night: 0,
            eve:   0,
            morn: 0,
          },
          pressure: 0,
          speed: 0,
          deg: 0,
          gust: 0,
          clouds: 0,
          pop: 0
        },
        {
          dt: 1622203200, temp: {
            max: 28, min: 18,
            day: 0,
            night: 0,
            eve: 0,
            morn: 0
          }, humidity: 75, weather: [],
          sunrise: 0,
          sunset: 0,
          feels_like:  {
            day:0,
            night: 0,
            eve:   0,
            morn: 0,
          },
          pressure: 0,
          speed: 0,
          deg: 0,
          gust: 0,
          clouds: 0,
          pop: 0
        },
        // Agrega más datos si es necesario
      ]
    };

    component.forecast = forecastData;
    component.ngOnChanges({ forecast: { currentValue: forecastData } } as any);
    expect(component.chartData.length).toBeGreaterThan(0);
  });

  it('should generate humidity chart data', () => { //generar datos de la grafica de la humedad
    const forecastData: ForecastData = {
      city: {
        id: 1,
        name: 'CityName',
        coord: { lon: 0, lat: 0 },
        country: 'Country',
        population: 100000,
        timezone: 0
      },
      cod: '200',
      message: 0,
      cnt: 5,
      list: [
        {
          dt: 1622116800, temp: {
            max: 25, min: 15,
            day: 0,
            night: 0,
            eve: 0,
            morn: 0
          }, humidity: 80, weather: [],
          sunrise: 0,
          sunset: 0,
          feels_like:  {
            day:0,
            night: 0,
            eve:   0,
            morn: 0,
          },
          pressure: 0,
          speed: 0,
          deg: 0,
          gust: 0,
          clouds: 0,
          pop: 0
        },
        {
          dt: 1622203200, temp: {
            max: 28, min: 18,
            day: 0,
            night: 0,
            eve: 0,
            morn: 0
          }, humidity: 75, weather: [],
          sunrise: 0,
          sunset: 0,
          feels_like:  {
            day:0,
            night: 0,
            eve:   0,
            morn: 0,
          },
          pressure: 0,
          speed: 0,
          deg: 0,
          gust: 0,
          clouds: 0,
          pop: 0
        },

      ]
    };

    component.forecast = forecastData;
    component.ngOnChanges({ forecast: { currentValue: forecastData } } as any);
    expect(component.humidityChartData.length).toBeGreaterThan(0);
  });

  it('should switch to graph view when showGraph() is called', () => { //mostrar el grafico
    component.showGraph();
    expect(component.currentIndex).toEqual(1);
  });

  it('should switch to humidity graph view when showHumidityGraph() is called', () => { //mostrar la grafica de la humedad
    component.showHumidityGraph();
    expect(component.currentIndex).toEqual(2);
  });

  it('should switch to weekly forecast view when showWeeklyForecast() is called', () => { //mostrar la prevision semanal
    component.showWeeklyForecast();
    expect(component.currentIndex).toEqual(0);
  });


});
