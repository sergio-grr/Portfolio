import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { CountryMainComponent } from './pages/country-main/country-main.component';
import { ModalComponent } from './components/Modal/Modal.component';
import { CountryRoutingModule } from './country-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CountryMainComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    CountryRoutingModule,
    FormsModule,
    
  ],
  exports: [CountryMainComponent],
  providers: [],
})
export class CountryModule { }
