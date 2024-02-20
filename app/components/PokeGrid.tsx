import { PokemonDetails, type ListOfPokemons } from "~/types"
import { PokeItem } from './PokeItem'
import { useEffect, useState } from "react";

interface Props {
	pokemons: ListOfPokemons
	checkPokemon: (pokemon: PokemonDetails) => void;
}

export const PokeGrid: React.FC<Props> = ({ pokemons, checkPokemon }) => {
	const [filteredPokemons, setFilteredPokemons] = useState<ListOfPokemons>([]);

	const filterPokemon = () => {

		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
		const favoritePokemons = pokemons.filter((pokemon) =>
			favorites.some((fav: PokemonDetails) => fav.name === pokemon.name)
		);

		const otherPokemons = pokemons.filter((pokemon) =>
			!favorites.some((fav: PokemonDetails) => fav.name === pokemon.name)
		);

		const allPokemons = [...favoritePokemons, ...otherPokemons];
		setFilteredPokemons(allPokemons);

	}

	const clearFavorites = () => {
		localStorage.removeItem('favorites');
		filterPokemon()
	};

	useEffect(() => {
		filterPokemon();
	}, [pokemons]);


	return (
		<div className="mx-auto max-w-screen-xl">
			<div className="flex justify-start px-8">
				<button
					onClick={clearFavorites}
					className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red active:bg-red-800"
				>
					Delete Favorites
				</button>
			</div>
			<div className="mx-auto max-w-screen-xl justify-items-center gap-4 p-8 lg:grid-cols-4 grid  md:grid-cols-3 sm:grid-cols-2">
				{filteredPokemons.map((pokemon) => (
					<PokeItem key={pokemon.name} urlPokemon={pokemon.url} checkPokemon={checkPokemon} filterPokemon={filterPokemon}/>
				))}
			</div>
		</div>
	)
}
