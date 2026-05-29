import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import datosPersonajesMatrix from "../data/personajes-matrix.json";

const ArchivosJSON = () => {
  const [busqueda, setBusqueda] = useState("");
  const [vistaActiva, setVistaActiva] = useState("tabla");

  const resultados = useMemo(() => {
    const q = busqueda.toLowerCase().trim();
    if (!q) return datosPersonajesMatrix;
    return datosPersonajesMatrix.filter(
      (t) =>
        t.nombre.toLowerCase().includes(q) || t.rol.toLowerCase().includes(q)
    );
  }, [busqueda]);

  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="border border-green-500 bg-black/80 p-6 rounded shadow-[0_0_15px_rgba(0,255,65,0.2)]">
        <h2 className="text-3xl font-bold text-green-500 mb-1">
          &gt; ARCHIVOS JSON
        </h2>
        <p className="text-green-700 text-sm">Explorador de base de datos.</p>
      </div>
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700"
          />
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="&gt; Buscar..."
            className="w-full bg-black border border-green-900 rounded px-10 py-2.5 text-green-500 focus:border-green-500"
          />
        </div>
        <div className="flex border border-green-900 rounded shrink-0">
          <button
            onClick={() => setVistaActiva("tabla")}
            className={`px-4 font-bold text-xs ${
              vistaActiva === "tabla"
                ? "bg-green-500 text-black"
                : "text-green-700 hover:text-green-500"
            }`}
          >
            TABLA
          </button>
          <button
            onClick={() => setVistaActiva("json")}
            className={`px-4 border-l border-green-900 font-bold text-xs ${
              vistaActiva === "json"
                ? "bg-green-500 text-black"
                : "text-green-700 hover:text-green-500"
            }`}
          >
            JSON
          </button>
        </div>
      </div>
      {vistaActiva === "tabla" ? (
        <div className="overflow-x-auto rounded border border-green-900">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-green-900 bg-black/90 text-green-700 uppercase">
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Rol</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-green-900/60 hover:bg-green-900/30"
                >
                  <td className="px-4 py-3 text-white font-bold">{t.nombre}</td>
                  <td className="px-4 py-3 text-gray-300">{t.rol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <pre className="bg-black/90 border border-green-900 p-6 rounded overflow-auto text-xs text-green-500 leading-relaxed max-h-[60vh]">
          {JSON.stringify(resultados, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default ArchivosJSON
