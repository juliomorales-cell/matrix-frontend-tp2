import { useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import PerfilMartin from '../profiles/PerfilMartin'
import PerfilRodrigo from '../profiles/PerfilRodrigo'
import PerfilFacundo from '../profiles/PerfilFacundo'
import PerfilFlorencia from '../profiles/PerfilFlorencia'

const Tripulante = ({ tripulantes }) => {
	const { id } = useParams()
	const tripulante = tripulantes.find((t) => t.id === parseInt(id))

	if (!tripulante) {
		return <ErrorMessage text="TRIPULANTE NO ENCONTRADO" />
	}

	switch (tripulante.id) {
		case 1:
			return <PerfilMartin tripulante={tripulante} />
		case 2:
			return <PerfilRodrigo tripulante={tripulante} />
		case 3:
			return <PerfilFacundo tripulante={tripulante} />
		case 4:
			return <PerfilFlorencia tripulante={tripulante} />
		default:
			return <ErrorMessage text="PERFIL NO IMPLEMENTADO" />
	}
}

export default Tripulante
