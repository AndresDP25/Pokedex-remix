import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { useState } from "react";


interface PaginationProps {
	loadMore: (url: string) => Promise<void>;
	nextUrl: string;
	prevUrl?: string;
}


export const Pagination: React.FC<PaginationProps> = ({ loadMore, nextUrl, prevUrl }) => {
	const [page, setPage] = useState(1)

	const next = () => {
		setPage(page + 1);
	}

	const prev = () => {
		setPage(Math.max(1, page - 1));
	  };


	return (
		<div className="flex items-center w-full my-5 gap-4 justify-center">
			{prevUrl && (
				<div className="flex gap-2 btn rounded-md bg-slate-700 text-white font-bold text-xl p-2 hover:cursor-pointer hover:bg-slate-500" 
					onClick={() => {loadMore(prevUrl); prev()}}>
					<Button	>
						<IoIosArrowBack size={24} />
					</Button>
				</div>
			)}
			<div className="font-bold text-xl">{page}</div>
			{nextUrl && (
				<div className="flex gap-2 btn rounded-md bg-slate-700 text-white font-bold text-xl p-2 hover:cursor-pointer hover:bg-slate-500" 
					onClick={() => {loadMore(nextUrl); next(); }}>
					<Button>
						<IoIosArrowForward size={24} />
					</Button>
				</div>
			)}
		</div>
	)
}
