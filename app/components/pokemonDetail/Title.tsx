interface Props {
	content: string;
	backgroundSelected: string;
  }

export const Title = ({ content, backgroundSelected }: Props) => {
  return (
	<span className="text-center font-bold text-2xl" style={{ color: backgroundSelected }}>
		{content}
	</span>
  )
}
