import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SecondaryPageComponent } from './pages/secondary-page/secondary-page.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },  {
    path: 'log',
    component: LoginComponent
  },{
    path: 'secondary',
    component: SecondaryPageComponent
  },{
    path:'weatherApp',
    loadChildren: () => import("./../01-WeatherApp/weather.module").then(m => m.WeatherModule )
  },{
    path:'country',
    loadChildren: () => import("./../02-BanderaPaís/country.module").then(m => m.CountryModule)
  },{
    path:'taskList',
    loadChildren: () => import("./../03-TaskList/tasklist.module").then(m => m.TasklistModule)
  },{
    path:'population',
    loadChildren: () => import("./../04-PoblacionesEspaña/population.module").then(m => m.PopulationModule)
  }, {
    path:'exit',
    loadChildren: () => import("./../../app/app.module").then(m => m.AppModule)
  },{
    path: '**',
    loadChildren: () => import ("./../06-error404/error404.module").then(m => m.Error404Module )
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
