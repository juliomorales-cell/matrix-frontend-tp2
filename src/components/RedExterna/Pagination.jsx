import Button from '../Button'

const Pagination = ({ paginaActual,	totalPaginas, onAnterior, onSiguiente }) => {
	const esPrimeraPagina = paginaActual === 1
	const esUltimaPagina = paginaActual >= totalPaginas

	return (
		<div className="flex justify-center items-center gap-4 mt-4">
			<Button
				onClick={onAnterior}
				text="ANTERIOR"
				disabled={esPrimeraPagina}
			/>

			<span className="text-green-500 font-mono font-bold text-sm">
				PÁGINA {paginaActual} DE {totalPaginas || 1}
			</span>

			<Button
				onClick={onSiguiente}
				text="SIGUIENTE"
				disabled={esUltimaPagina}
			/>
		</div>
	)
}

export default Pagination
