import { FaWeight } from "react-icons/fa";
import { TfiRuler } from "react-icons/tfi";
import { IPokemon } from "~/types";

interface Props {
	pokemon: IPokemon | null;
  }

export const Stats = ({ pokemon }: Props) => {
  return (
	<div className="my-1 w-full flex justify-evenly">
		<div className="flex flex-col items-center gap-1">
				<FaWeight size={20}/>
			{pokemon?.weight}
			<p className="text-gray-600 text-sm">Weight</p>
		</div>
		<div className="flex flex-col items-center gap-1">
			<TfiRuler size={20} />
			{pokemon?.height}
			<p className="text-gray-600 text-sm">Height</p>
		</div>
	</div>
  )
}
