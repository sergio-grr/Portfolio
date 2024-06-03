import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonAllData, PokemonResponseList } from '../../interfaces/PokemonAllData';
import { MatDialog } from '@angular/material/dialog';
import { ModalPokemonComponent } from '../../components/modal-pokemon/modal-pokemon.component';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css'],
})
export class PokedexPageComponent implements OnInit {
  constructor(
    private pokedexService: PokemonService,
    public dialog: MatDialog,
  ) {}

  allDataPokemon: PokemonAllData[] = [];
  urlNext: string | undefined;
  isFetching = false;

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    if (!this.isFetching) {
      if (this.urlNext == undefined) {
        this.pokedexService.getListPokemon().subscribe((data: PokemonResponseList) => {
          this.isFetching = true;
          this.urlNext = data.next;

          data.results.forEach((pokemon) => {
            this.pokedexService.getData(pokemon.url).subscribe((details) => {
              const pokemonData: PokemonAllData = {
                name: pokemon.name,
                sprite: details.sprites.front_default,
                types: details.types,
                height: details.height,
                weight: details.weight,
                abilities: details.abilities,
                order: details.order,
                stats: details.stats,
                game_indices: details.game_indices
              };
              this.allDataPokemon.push(pokemonData);
            });
          });
          this.isFetching = false;
        });
      } else {
        this.pokedexService.getListPokemon(this.urlNext).subscribe((data: PokemonResponseList) => {
          this.isFetching = true;
          this.urlNext = data.next;

          data.results.forEach((pokemon) => {
            this.pokedexService.getData(pokemon.url).subscribe((details) => {
              const pokemonData: PokemonAllData = {
                name: pokemon.name,
                sprite: details.sprites.front_default,
                types: details.types,
                height: details.height,
                weight: details.weight,
                abilities: details.abilities,
                order: details.order,
                stats: details.stats,
                game_indices: details.game_indices
              };
              this.allDataPokemon.push(pokemonData);
            });
          });
          this.isFetching = false;
        });
      }
    }
  }

  openDialog(pokemonData: PokemonAllData): void {
    this.dialog.open(ModalPokemonComponent, {
      data: pokemonData
    });
  }
}
