import { Weather } from './interfaces/Forecast.interface';
import { NgModule } from '@angular/core';

import { SearchComponent } from './components/search/search.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { ResultComponent } from './components/result/result.component';

import { WeatherPageComponent } from './pages/main-pages/main-pages.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WheaterRoutingModule } from './wheater-routing.module';
import { LocationComponent } from './components/location/location/location.component';


@NgModule({
  declarations: [
    SearchComponent,
    GraphicsComponent,
    ResultComponent,
    WeatherPageComponent,
    LocationComponent,

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule ,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatGridListModule,
    NgxChartsModule,
    SlickCarouselModule,
    MatIconModule,
    MatSidenavModule,
    WheaterRoutingModule,


  ],
  exports: [],

  providers: [],
})
export class WeatherModule { }
