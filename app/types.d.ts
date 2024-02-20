export interface Pokemon {
	name: string,
	url: string, 
}

export type ListOfPokemons = Pokemon[]

export interface PokemonDetails {
	name: string;
	sprites: {
	  front_default: string
	}
	types: Array[]
	id: number
}

export interface PokemonData {
	results: Pokemon[]
	next: string
	previous: string
}

export interface IPokemon {
	abilities: Ability[];
	base_experience: number;
	forms: Form[];
	game_indices: GameIndice[];
	height: number;
	held_items: any[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Move[];
	name: string;
	order: number;
	past_types: any[];
	species?: Species;
	sprites?: Sprites;
	stats: Stat[];
	types: Type[];
	weight: number;
  }