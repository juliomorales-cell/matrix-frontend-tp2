const LoadingState = () => {
	return (
		<div className="flex flex-col items-center justify-center p-12 border border-green-900 border-dashed rounded bg-black/50">
			<div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4" />

			<p className="text-green-500 font-mono animate-pulse text-center">
				&gt; Accediendo a la matriz. Cargando datos de la Red Externa
				(Zion)...
			</p>
		</div>
	)
}

export default LoadingState
