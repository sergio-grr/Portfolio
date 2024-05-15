import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryData } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private API_URL = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getAllFlags(): Observable<CountryData[]> {
    return this.http.get<CountryData[]>(this.API_URL);
  }
}
