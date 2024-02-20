import { IPokemon } from "~/types";
import { background } from "~/utils/BackgroundsByType";


interface Props {
	pokemon: IPokemon | null;
  }

export const PokeTypes = ({ pokemon }: Props) => {
	return (
	  <div className="sm:mt-10 md:mt-20 py-1 flex items-center gap-4">
		{/* @ts-ignore */}
		{pokemon?.types.map(({ type: { name } }) => (
		  <div
			key={name}
			/* @ts-ignore */
			style={{ background: background[name] }}
			className="px-4 py-1 rounded-2xl bg-slate-700 text-white font-bold capitalize"
		  >
			{name}
		  </div>
		))}
	  </div>
	);
  };