;

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonData } from '../interfaces/pokemondata.interface';
import { PokemonAllData, PokemonResponseList } from '../interfaces/PokemonAllData';



@Injectable({providedIn: 'root'})
export class PokemonService {
  private API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getListPokemon(url?: string): Observable<PokemonResponseList> {
    
    if(url!==undefined){

     return this.http.get<PokemonResponseList>(url)
    }

    return this.http.get<PokemonResponseList>(this.API_URL)


  }

  getData(url:string) : Observable<PokemonData>{

      return this.http.get<PokemonData>(url)
  }
}
