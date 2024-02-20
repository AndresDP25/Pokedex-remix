import { useLoaderData, Params } from '@remix-run/react';
import React, { useState } from 'react'
import { getPokemonById } from '~/api';
import { BaseStats } from '~/components/pokemonDetail/BaseStats';
import { Favorites } from '~/components/pokemonDetail/Favorites';
import { Header } from '~/components/pokemonDetail/Header';
import { PokeTypes } from '~/components/pokemonDetail/PokeTypes';
import { Stats } from '~/components/pokemonDetail/Stats';
import { Title } from '~/components/pokemonDetail/Title';
import { IPokemon, PokemonData } from '~/types';
import { background } from "~/utils/BackgroundsByType";


export default function $pokemonId() {
  const   data  = useLoaderData<IPokemon>()
  console.log(data)
  const [pokemon, setPokemon] = useState(data)
  console.log(pokemon)
  /* @ts-ignore */
	const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  return (
    <div className="min-h-screen flex flex-col justify-between items-center overflow-hidden" style={{ backgroundColor: backgroundSelected }}>
      <Header pokemon={pokemon}/>
      <div className="max-w-650px bg-white flex flex-col items-center rounded-md md:relative mb-36">
        <img
          className="brightness-150 sm:w-64 sm:h-64 w-32 h-32 max-h-full md:absolute md:top-0 md:-translate-y-48 mt-4"
          src={pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default}
          alt={pokemon?.name}
        />
        <PokeTypes pokemon={pokemon} />
        <Title content="About" backgroundSelected={backgroundSelected} />
        <Stats pokemon={pokemon} />
        <Title content="Base Stats" backgroundSelected={backgroundSelected} />
        <BaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} />
      </div>
    </div>
  );
}


export async function loader({ params }: { params: Params }) {
  try {
    const response = await getPokemonById(params.pokemonId);
    return response
  } catch (error) {
    console.log(error)
  }
}


