import { useNavigate } from 'react-router-dom';
import PerfilBase from './PerfilBase';

export default function PerfilFlorencia({ tripulante }) {
  const navigate = useNavigate();

  return (
    <PerfilBase tripulante={tripulante} onBack={() => navigate('/integrantes')}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <span className="border border-green-500/50 bg-black/60 text-green-500 px-3 py-1.5 rounded font-mono text-xs font-bold tracking-widest shrink-0 shadow-[0_0_8px_rgba(0,255,65,0.3)]">
          &gt; REGISTRO VISUAL
        </span>
        <p className="text-green-400/90 font-mono text-sm border-l-2 border-green-500/50 pl-3 leading-tight">
          Su sensibilidad aporta luz a la simulación. Decodifica visuales de Zion con perfección absoluta.
        </p>
      </div>
    </PerfilBase>
  );
}