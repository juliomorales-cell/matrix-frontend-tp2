import Bitacora from "./pages/Bitacora";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatrixRain from "./components/MatrixRain";
import GaleriaMatrix from "./pages/GaleriaMatrix";
import ArbolRender from "./pages/ArbolRender";
import PortadaHome from "./pages/PortadaHome";
import RedExterna from "./pages/RedExterna";
import Tripulantes from "./pages/Tripulantes";
import Tripulante from "./pages/Tripulante";
import ArchivosJSON from "./pages/ArchivosJSON";
import Sidebar from "./components/Sidebar/Sidebar";
import datosTripulantes from "./data/tripulantes.json"

export default function App() {
  return (
    <Router>
      <div className="flex h-screen text-green-500 font-mono overflow-hidden relative">
        <MatrixRain />
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 z-10 relative min-w-0 bg-transparent">
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
              element={
                <h2 className="text-2xl text-green-500">
                  &gt; ERROR 404: SECCIÓN NO ENCONTRADA_
                </h2>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
