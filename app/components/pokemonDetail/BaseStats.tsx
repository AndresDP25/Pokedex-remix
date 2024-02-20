import { IPokemon } from "~/types";
import { Progress } from "@/components/ui/progress"

interface Props {
	pokemon: IPokemon | null;
	backgroundSelected: string;
}

export const BaseStats = ({ pokemon, backgroundSelected }: Props) => {
	
	const maxStat = 200;

	const baseStatsNames = {
		hp: "hp",
		attack: "atk",
		defense: "def",
		"special-attack": "satk",
		"special-defense": "sdef",
		speed: "spd",
	};

	return (
		<div className="mb-4">
			{/* @ts-ignore */}
			{pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
				const porcentage = (base_stat / maxStat) * 100;
				return (
					<div key={name} className="w-full flex items-center">
						<span className="font-bold text-xs uppercase text-right w-1/5 mr-4 pr-4border-r border-gray-300" style={{ color: backgroundSelected }}>
							{/* @ts-ignore */}
							{baseStatsNames[name]}
						</span>
						<div className="w-60 flex items-center gap-10 mr-7">
							<p className="flex w-1/12">0{base_stat}</p>
							<div className="w-full h-4 bg-gray-300 rounded-full">
								<div 
									className="h-full rounded-full"
									style={{ width: `${porcentage}%`, backgroundColor: backgroundSelected }}
									></div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	)
}
