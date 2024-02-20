import { env } from "../utils"

export async function getPokemonsApi() {
	const url = `${env.BASE_PATH}/pokemon`

	try {
		const response = await fetch(url)
		const result = await response.json()
		return result
	} catch (error) {
		throw error
	}
}

export async function getPokemonByUrlApi(url: string) {
	try {
		const response = await fetch(url)
		const result = await response.json()
		return result
	} catch (error) {
		throw error
	}
}

export async function getPokemonById(pokemonId: number | string | undefined) {
	try {
		const response = await fetch(`${env.BASE_PATH}/pokemon/` + pokemonId)
		const result = await response.json()
		return result
	} catch (error) {
		throw error
	}
}
