import { useLoaderData } from "@remix-run/react"
import { Header, PokeGrid, Pagination } from "../components"   
import { getPokemonByUrlApi, getPokemonsApi } from "../api"
import { useState } from "react";
import { PokemonData, PokemonDetails } from "~/types";

export default function Index(): JSX.Element {
  const   data  = useLoaderData<PokemonData>()
  const [pokemons, setPokemon] = useState(data.results)
  const [nextUrl, setNextUrl] = useState(data.next)
  const [prevUrl, setPrevUrl] = useState(data.previous)
  const [pokemonSelected, setPokemonSelected] = useState<PokemonDetails | undefined>(undefined)


  const loadMore = async (url: string) => {
       const response = await getPokemonByUrlApi(url)
       setNextUrl(response.next)
       setPrevUrl(response.previous);
       setPokemon(response.results)
  }

  const checkPokemon = (pokemon: PokemonDetails) => {
    setPokemonSelected(pokemon)
  }
  
  return (
    <div className="flex w-full flex-col justify-center m-0">
      <Header />
      <div className="flex w-full justify-center mt-5">
        <PokeGrid pokemons={pokemons} checkPokemon={checkPokemon} />
      </div>
      <Pagination loadMore={loadMore} nextUrl={nextUrl} prevUrl={prevUrl} />
    </div>
  );
}

export async function loader() {
    try {
      const response = await getPokemonsApi();
      return response
    } catch (error) {
      console.log(error)
    }
}