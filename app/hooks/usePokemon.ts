import { useState } from "react";
import { getPokemonByUrlApi } from "~/api";
import { Pokemon, PokemonDetails } from "~/types";

interface PokemonHook {
	pokemon: Pokemon | null;
	getPokemonByUrl: (url: string) => Promise<void>;
	loading: boolean;
  }

export const usePokemon = () => {
	const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
	const [loading, setLoading] = useState(true);
  
	const getPokemonByUrl = async(url: string) => {
		try {
			setLoading(true)
			const data = await getPokemonByUrlApi(url)
			setPokemon(data)
			setLoading(false)
		} catch (error) {
			return null
		}
	}

	return {
		pokemon,
		getPokemonByUrl,
		loading
	}
}
