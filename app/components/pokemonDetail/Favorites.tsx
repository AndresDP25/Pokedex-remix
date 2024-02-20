import { useEffect, useState } from "react";


interface Props {
	pokemonId: number;
  }
  
  const FAVORITES_KEY = 'favoritePokemons';

export const Favorites : React.FC<Props> = ({ pokemonId }) => {

	const [isFavorite, setIsFavorite] = useState(false);

	const handleToggleFavorite = () => {
		const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
		if (isFavorite) {
		  // Si ya es favorito, quitarlo de la lista de favoritos
		  const updatedFavorites = favorites.filter(id => id !== pokemonId);
		  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
		} else {
		  // Si no es favorito, agregarlo a la lista de favoritos
		  const updatedFavorites = [...favorites, pokemonId];
		  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
		}
		setIsFavorite(!isFavorite);
	  };

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
		setIsFavorite(favorites.includes(pokemonId));
	  }, [pokemonId]);

  return (
	<button onClick={handleToggleFavorite}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  )
}
