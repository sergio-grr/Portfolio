
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonData, PokemonResult } from '../interfaces/pokemondata.interface';




@Injectable({providedIn: 'root'})
export class PokemonService {
  private API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getListPokemon(): Observable<PokemonResult[]> {
    return this.http.get<PokemonData>(this.API_URL)
      .pipe(
        map((data: PokemonData) => data.results)
      );
  }
}
