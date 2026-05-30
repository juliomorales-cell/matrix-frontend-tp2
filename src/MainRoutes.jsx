import { Routes, Route } from 'react-router-dom'
import ErrorMessage from './components/ErrorMessage'
import Bitacora from './pages/Bitacora'
import GaleriaMatrix from './pages/GaleriaMatrix'
import ArbolRender from './pages/ArbolRender'
import PortadaHome from './pages/PortadaHome'
import RedExterna from './pages/RedExterna'
import Tripulantes from './pages/Tripulantes'
import Tripulante from './pages/Tripulante'
import ArchivosJSON from './pages/ArchivosJSON'
import datosTripulantes from './data/tripulantes.json'

const MainRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<PortadaHome tripulantes={datosTripulantes} />}
			/>
			<Route
				path="/integrantes"
				element={<Tripulantes tripulantes={datosTripulantes} />}
			/>
			<Route
				path="/integrantes/:id"
				element={<Tripulante tripulantes={datosTripulantes} />}
			/>
			<Route path="/datos" element={<ArchivosJSON />} />
			<Route path="/api" element={<RedExterna />} />
			<Route path="/galeria" element={<GaleriaMatrix />} />
			<Route path="/bitacora" element={<Bitacora />} />
			<Route path="/arbol" element={<ArbolRender />} />
			<Route
				path="*"
				element={<ErrorMessage text="SECCIÓN NO ENCONTRADA" />}
			/>
		</Routes>
	)
}

export default MainRoutes
