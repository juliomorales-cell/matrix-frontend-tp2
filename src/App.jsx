import { BrowserRouter as Router } from 'react-router-dom'
import MatrixRain from './components/MatrixRain'
import Sidebar from './components/Sidebar/Sidebar'
import MainRoutes from './MainRoutes'

export default function App() {
	return (
		<Router>
			<div className="flex h-screen text-green-500 font-mono overflow-hidden relative">
				<MatrixRain />
				<Sidebar />
				<main className="flex-1 overflow-y-auto p-6 z-10 relative min-w-0 bg-transparent">
					<MainRoutes />
				</main>
			</div>
		</Router>
	)
}
