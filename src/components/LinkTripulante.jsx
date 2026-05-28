import { Link } from "react-router-dom";

export default function LinkTripulante({ tripulante }) {
  return (
    <Link
      to={`/integrantes/${tripulante.id}`}
      key={tripulante.id}
      style={{ color: "inherit", textDecoration: "none" }}
      className="border border-green-900 p-3 rounded flex gap-4 hover:border-green-500 transition-colors bg-black/40 group relative overflow-hidden cursor-pointer hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]"
    >
      <div className="w-16 h-16 shrink-0 border border-green-900 group-hover:border-green-500 rounded overflow-hidden transition-colors">
        <img
          src={tripulante.avatar}
          alt={tripulante.nombre}
          className="w-full h-full object-cover block"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-green-500 font-bold text-lg leading-none mb-1 group-hover:text-white transition-colors">
          {tripulante.nombre}
        </h3>
        <p className="text-green-700 text-xs mb-0 tracking-widest">
          {tripulante.rol.toUpperCase()}
        </p>
      </div>
    </Link>
  );
}
