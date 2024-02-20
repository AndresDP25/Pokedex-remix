import { TbPokeball } from "react-icons/tb";
export const Header = () => {

	const goldenColor = "#FFD700";
  return (
	<div className="bg-slate-700 text-center gap-2 py-3 flex items-center justify-center">
		<TbPokeball size={32} style={{ color: goldenColor }} />
		<span className={`text-white font-bold text-2xl`}>Pokedex</span>
	</div>
  )
}
