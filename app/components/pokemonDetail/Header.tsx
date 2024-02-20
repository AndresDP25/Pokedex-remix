import { useNavigate } from "@remix-run/react";
import { ArrowLeftIcon } from "lucide-react";
import { PokeballIconBig } from "~/assets/pokeball";
import { IPokemon } from "~/types";


interface Props {
	pokemon: IPokemon | null;
  }

export const Header = ({ pokemon }: Props) => {
	const  navigate = useNavigate();
  return (
	<header className="flex space-x-10 items-center mt-10 sm:mt-3 text-white">
    <div className="flex items-center gap-3">
      <ArrowLeftIcon className="cursor-pointer hover:scale-125 " onClick={() => navigate('/')} />
      <span className="font-bold text-4xl capitalize">{pokemon?.name}</span>
    </div>
    <PokeballIconBig className={`m-4 md:w-80 hidden sm:block`}/>
    <p className="font-bold text-xl">#{pokemon?.id}</p>
  </header>
  )
}
