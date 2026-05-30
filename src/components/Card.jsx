const Card = ({ onclick, imgSrc, title, subtitle }) => {
	return (
		<div
			onClick={onclick}
			className="group relative cursor-pointer border border-green-900 rounded overflow-hidden bg-black hover:border-green-500 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300"
		>
			<div className="aspect-square w-full overflow-hidden">
				<img
					src={imgSrc}
					alt={title}
					className="w-full h-full object-cover object-top transition-all duration-500 group-hover:brightness-125 group-hover:contrast-110 group-hover:drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]"
				/>
			</div>

			<div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

			<div className="p-3 border-t border-green-900 group-hover:border-green-700 transition-colors bg-black">
				<p className="text-green-400 font-bold text-sm tracking-widest text-center truncate group-hover:text-white transition-colors">
					{title}
				</p>
				<p className="text-green-800 text-xs text-center uppercase tracking-widest mt-0.5 group-hover:text-green-500 transition-colors truncate">
					{subtitle}
				</p>
			</div>
		</div>
	)
}

export default Card
