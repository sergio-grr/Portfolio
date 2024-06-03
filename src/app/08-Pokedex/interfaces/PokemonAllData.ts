import { Type, Ability, Stat, Index } from './PokemonData';

// pokemondata.interface.ts
interface Result {
  name: string;
  url: string;

}

// pokemonalldata.interface.ts
export interface PokemonAllData {
  name: string,
  sprite: string,
  types: Type[],
  height:number,
  weight: number
  abilities: Ability[]
  order: number
  stats: Stat[]
  game_indices: Index[]
}

export interface PokemonResponseList{
  count: number;
  next: string;
  previous: string;
  results: Result[];
}
