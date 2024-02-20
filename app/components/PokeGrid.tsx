import { PokemonDetails, type ListOfPokemons } from "~/types"
import { PokeItem } from './PokeItem'

interface Props {
	pokemons: ListOfPokemons
	checkPokemon: (pokemon: PokemonDetails) => void;
}

export const PokeGrid: React.FC<Props> = ({ pokemons, checkPokemon }) => {
	console.log(pokemons)

	return (
		<div className="mx-auto max-w-screen-xl justify-items-center gap-4 p-8 lg:grid-cols-4 grid  md:grid-cols-3 sm:grid-cols-2">
			{pokemons.map((pokemon) => (
				<PokeItem key={pokemon.name} urlPokemon={pokemon.url} checkPokemon={checkPokemon} />
			))}
		</div>
	)
}
