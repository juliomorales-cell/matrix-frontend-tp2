const ErrorState = ({ message }) => {
	return (
		<div className="border-2 border-red-500 bg-red-900/20 p-6 rounded text-center animate-pulse shadow-[0_0_20px_rgba(255,0,0,0.4)]">
			<h3 className="text-red-500 font-bold text-xl mb-2">
				⚠️ ALERTA CRÍTICA
			</h3>

			<p className="text-red-400 font-mono">{message}</p>
		</div>
	)
}

export default ErrorState
