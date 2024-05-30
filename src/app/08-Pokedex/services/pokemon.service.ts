;

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { PokemonAllData, PokemonResponseList } from '../interfaces/PokemonAllData';
import { PokemonData } from '../interfaces/PokemonData';



@Injectable({providedIn: 'root'})
export class PokemonService {
  private API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getListPokemon(url?: string): Observable<PokemonResponseList> {
    console.log(url);
    if(url!==undefined){

     return this.http.get<PokemonResponseList>(url)
    }

    return this.http.get<PokemonResponseList>(this.API_URL)


  }

  getData(url:string) : Observable<PokemonData>{

      return this.http.get<PokemonData>(url)
  }
}
