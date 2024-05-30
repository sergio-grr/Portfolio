import { Type } from "./PokemonData";


// pokemondata.interface.ts
interface Result {
  name: string;
  url: string;
}

// pokemonalldata.interface.ts
export interface PokemonAllData {
  name: string,
  sprite: string,
  type: Type[],
  
}

export interface PokemonResponseList{
  count: number;
  next: string;
  previous: string;
  results: Result[];
}
