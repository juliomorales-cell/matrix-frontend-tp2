import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PerfilBase from './PerfilBase';

const PerfilFacundo = ({ tripulante }) => {
  const navigate = useNavigate();
  const [confettiActivo, setConfettiActivo] = useState(false);

  const lanzarConfetti = () => {
    setConfettiActivo(true);
    setTimeout(() => setConfettiActivo(false), 3000);
  };

  return (
    <PerfilBase tripulante={tripulante} onBack={() => navigate('/integrantes')}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          onClick={lanzarConfetti}
          className="border border-green-500 text-green-400 px-4 py-2 rounded font-mono text-xs font-bold
                     hover:bg-green-500 hover:text-black transition-all duration-300
                     hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] tracking-widest shrink-0"
        >
          [ SECRETO MÓDULO 🎉 ]
        </button>
        {confettiActivo && (
          <div className="flex items-center gap-3 border border-green-500/40 bg-green-900/20 px-4 py-1.5 rounded font-mono text-sm text-green-300 shadow-[0_0_10px_rgba(0,255,65,0.2)]"
               style={{ animation: 'fadeIn 0.3s ease' }}>
            <span className="text-xl animate-bounce">🟢</span>
            <span className="font-bold tracking-widest text-xs uppercase">ACCESO CONCEDIDO: Facundo tiene sus secretos.</span>
          </div>
        )}
      </div>
    </PerfilBase>
  );
}

export default PerfilFacundo
