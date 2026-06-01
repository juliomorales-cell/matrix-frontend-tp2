import { useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import PerfilMartin from '../profiles/PerfilMartin'
import PerfilRodrigo from '../profiles/PerfilRodrigo'
import PerfilFacundo from '../profiles/PerfilFacundo'

const Tripulante = ({ tripulantes }) => {
	const { nombre } = useParams()
	const nombreNormalizado = nombre.toLocaleLowerCase().trim()

	const tripulante = tripulantes.find((t) => t.nombre.toLocaleLowerCase().trim() === nombreNormalizado)

	if (!tripulante) {
		return <ErrorMessage text="TRIPULANTE NO ENCONTRADO" />
	}

	switch (nombreNormalizado) {
		case "martín":
			return <PerfilMartin tripulante={tripulante} />
		case "rodrigo":
			return <PerfilRodrigo tripulante={tripulante} />
		case "facundo":
			return <PerfilFacundo tripulante={tripulante} />
		default:
			return <ErrorMessage text="PERFIL NO IMPLEMENTADO" />
	}
}

export default Tripulante
