import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { concat, map } from 'rxjs';
import { PokemonAllData } from '../../interfaces/PokemonAllData';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css'],
})
export class PokedexPageComponent implements OnInit {
  constructor(private pokedexService: PokemonService) {}

  allDataPokemon: PokemonAllData[] = [];
  urlNext: string | undefined;
  isFeching = false
  ngOnInit() {
    this.getPokemons()
  }

  getPokemons() {
    if(!this.isFeching){
      if (this.urlNext == undefined) {

        this.pokedexService.getListPokemon().subscribe((data) => {
          this.isFeching=true
          this.urlNext = data.next;
        
          data.results.map((pokemon) => {
            let pokemonData: PokemonAllData | undefined;

            this.pokedexService.getData(pokemon.url).subscribe((data2) => {

              pokemonData = {
                name: pokemon.name,
                sprite: data2.sprites.front_default,
                type: data2.types,
              };
              this.allDataPokemon.push(pokemonData);

            });
            this.isFeching=false

          });



        });

      }else{
        this.pokedexService.getListPokemon(this.urlNext).subscribe((data) => {

          this.isFeching=true
          this.urlNext = data.next;

          data.results.map((pokemon) => {
            let pokemonData: PokemonAllData | undefined;
            this.pokedexService.getData(pokemon.url).subscribe((data2) => {

              pokemonData = {
                name: pokemon.name,
                sprite: data2.sprites.front_default,
                type: data2.types,
              };
              this.allDataPokemon.push(pokemonData)
            });

          });
          this.isFeching=false
        });
    }


    }
  }



}
