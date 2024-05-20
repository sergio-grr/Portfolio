import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Main/main.component';
import { ContactPageComponent } from './Main/pages/contact-page/contact-page.component';
import { AboutMePageComponent } from './Main/pages/aboutMe-page/aboutMe-page.component';
import { ProyectPageComponent } from './Main/pages/proyect-page/proyect-page.component';




const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },{
    path: 'proyect',
    component: ProyectPageComponent
  },{
    path: 'contact',
    component: ContactPageComponent
  },{
    path: 'aboutMe',
    component: AboutMePageComponent
  },{
    path:'weatherApp',
    loadChildren: () => import("./01-WeatherApp/weather.module").then(m => m.WeatherModule )
  },{
    path:'country',
    loadChildren: () => import("./02-BanderaPaís/country.module").then(m => m.CountryModule)
  },{
    path:'taskList',
    loadChildren: () => import("./03-TaskList/tasklist.module").then(m => m.TasklistModule)
  },{
    path:'population',
    loadChildren: () => import("./04-PoblacionesEspaña/population.module").then(m => m.PopulationModule)
  },{
    path:'login',
    loadChildren: () => import("./05-Login/login.module").then(m => m.LoginModule )
  },{
    path:'token',
    loadChildren: () => import("./07-token/token.module").then(m => m.TokenModule )
  },



  {
    path: '**',
    loadChildren: () => import ("./06-error404/error404.module").then(m => m.Error404Module )
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
