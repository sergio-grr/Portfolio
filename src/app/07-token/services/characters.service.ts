import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Fighters } from '../interfaces/characters.interface';
import { environments } from '../environments/environments';

@Injectable({ providedIn: 'root' })
export class CharactersService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Fighters[]> {
    return this.http.get<Fighters[]>(`${this.baseUrl}/fighters`);
  }

  getCharactersById(id: string): Observable<Fighters | undefined> {
    return this.http.get<Fighters>(`${this.baseUrl}/fighters/${id}`)
      .pipe(
        catchError(error => {
          if (error.status === 404) {
            return of(undefined);
          }
          return throwError(error);
        })
      );
  }

  addCharacter(fighters: Fighters): Observable<Fighters> {
    return this.http.post<Fighters>(`${this.baseUrl}/fighters`, fighters);
  }

  deleteCharacterById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/fighters/${id}`)
      .pipe(
        map(() => true),
        catchError(err => of(false))
      );
  }


  editCharacter(fighters: Fighters): Observable<Fighters> {
    if (!fighters.id) throw new Error('Fighters id is required');

    return this.http.patch<Fighters>(`${this.baseUrl}/fighters/${fighters.id}`, fighters);
  }



}
