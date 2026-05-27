import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PerfilBase from './PerfilBase';

export default function PerfilMartin({ tripulante }) {
  const navigate = useNavigate();
  const [secretoVisible, setSecretoVisible] = useState(false);

  return (
    <PerfilBase tripulante={tripulante} onBack={() => navigate('/integrantes')}>
      {/* MÓDULO EXTRA EN FOOTER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          onClick={() => setSecretoVisible(v => !v)}
          className="border border-green-500 text-green-400 px-4 py-2 rounded font-mono text-xs font-bold
                     hover:bg-green-500 hover:text-black transition-all duration-300
                     hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] tracking-widest shrink-0"
        >
          {secretoVisible ? '⛔ OCULTAR TRANSMISIÓN' : '🔓 INICIAR TRANSMISIÓN SECRETA'}
        </button>
        {secretoVisible && (
          <div className="border border-green-500/40 bg-green-900/20 px-4 py-2 rounded font-mono text-sm text-green-300 shadow-[0_0_10px_rgba(0,255,65,0.2)] animate-[fadeIn_0.4s_ease]"
               style={{ animation: 'fadeIn 0.4s ease' }}>
            <span className="text-green-500 font-bold mr-2">&gt;</span>
            {tripulante.secreto}
          </div>
        )}
      </div>
    </PerfilBase>
  );
}