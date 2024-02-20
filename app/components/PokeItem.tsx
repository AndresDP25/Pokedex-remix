import { usePokemon } from "~/hooks/usePokemon"
import { useEffect, useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from "@remix-run/react"
import { PokemonDetails } from "~/types"
import { background } from "~/utils/BackgroundsByType";

interface Props {
	urlPokemon: string
	checkPokemon: (pokemon: PokemonDetails) => void;
	filterPokemon: () => void;
}

export const PokeItem: React.FC<Props> = ({ urlPokemon, checkPokemon, filterPokemon }) => {
	const { loading, pokemon, getPokemonByUrl } = usePokemon()
	const [isFavorite, setIsFavorite] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const handleCheckboxChange = (event: any) => {
		setIsFavorite(!isFavorite);

		if (pokemon) {
			const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
			const updatedFavorites = isFavorite
				? favorites.filter((fav: PokemonDetails) => fav.id !== pokemon.id)
				: [...favorites, pokemon];
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		}
		
		filterPokemon();
	};

	/* @ts-ignore */
	const backgroundSelected = background[pokemon?.types[0]?.type?.name];

	const loadFavoriteState = () => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
		if (pokemon) { setIsFavorite(favorites.some((fav: PokemonDetails) => fav.id == pokemon?.id)); }
	};

	useEffect(() => {
		const fetchData = async () => {
			if (urlPokemon) {
				await getPokemonByUrl(urlPokemon);
				setLoaded(true);
			}
		};

		fetchData();
	}, [urlPokemon,]);

	useEffect(() => {
		if (loaded) {
			loadFavoriteState();
		}
	}, [loaded, isFavorite, localStorage.getItem('favorites')]);
	

	const setPokemon = () => {
		if (pokemon) {
			checkPokemon(pokemon)
		}
	}

	return (
		<>
			{loading ?
				<div className="w-24 h-24 flex items-center justify-items-center"><AiOutlineLoading3Quarters className="animate-spin w-7 h-7" /></div>
				: (
					<div className="w-full max-w-350px rounded-md flex flex-col text-decoration-none text-inherit border"
						style={{ borderColor: backgroundSelected }}	>
						<div className="flex flex-col border border-transparent border-start-start-radius: 0.5rem hover:brightness-150 transition duration-300" onClick={setPokemon}>
							<Link className="cursor-pointer" to={`/${pokemon?.id}`}>
								<span className="text-right p-4 pt-0 text-xl" style={{ color: backgroundSelected }}	>#{pokemon?.id}</span>
								<div
									className="relative w-full h-36 overflow-hidden">
									<img
										src={pokemon?.sprites.other.dream_world.front_default}
										alt={pokemon?.name}
										className="w-full h-full object-contain p-2 max-h-64" />
								</div>
							</Link>
							<div
								style={{ backgroundColor: backgroundSelected }}
								className="w-full flex items-center text-white p-2 font-bold"
							>
								<div className="flex flex-col items-center mx-auto">
									<h2>{pokemon?.name.toUpperCase()}</h2>
									<h3 className="text-base">{pokemon?.types[0].type.name.toUpperCase()}</h3>
								</div>
								<div className="ml-auto pr-3 text-2xl">
									<input
										className="cursor-pointer hidden"
										id={`favorite-checkbox-${pokemon?.id}`}
										type="checkbox"
										checked={isFavorite}
										onChange={handleCheckboxChange}
									/>
									<label htmlFor={`favorite-checkbox-${pokemon?.id}`} className="cursor-pointer">
										{isFavorite ? <FaHeart /> : <FaRegHeart />}
									</label>
								</div>
							</div>
						</div>
					</div>
				)}
		</>
	)
}
