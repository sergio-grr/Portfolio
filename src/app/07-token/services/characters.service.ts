import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fighters } from '../interfaces/characters.interface';
import { environments } from '../environments/environments';

@Injectable({ providedIn: 'root' })
export class CharactersService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Fighters[]> {
    return this.http.get<Fighters[]>(`${this.baseUrl}/fighters`);
  }
}
