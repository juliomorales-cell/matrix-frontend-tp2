import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// NOTA: Solo usa id, img, nombre y rol de los tripulantes
export default function Tripulantes({ tripulantes }) {
  const navigate = useNavigate();
  const [audioPlaying, setAudioPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && audioPlaying) {
      audioRef.current.play().catch(err => console.log('Autoplay retenido:', err));
    }
    return () => { if (audioRef.current) audioRef.current.pause(); };
  }, [audioPlaying]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current.play().then(() => setAudioPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="flex flex-col gap-6 z-10 relative pb-10">
      <audio ref={audioRef} src="/seleccion-tripulante.mp3" loop preload="auto" />
      <button onClick={toggleAudio} className={`fixed top-24 right-6 z-40 border px-4 py-2 rounded text-xs font-bold tracking-widest transition-all duration-300 ${audioPlaying ? 'bg-green-500 text-black border-green-400 shadow-[0_0_15px_rgba(0,255,65,0.6)]' : 'text-green-500 border-green-800 hover:border-green-400'}`}>
        {audioPlaying ? '🔊 SONIDO ACTIVO' : '🔇 ACTIVAR SONIDO'}
      </button>
      <div className="w-full p-6 border border-green-500 bg-black/80 rounded shadow-[0_0_15px_rgba(0,255,65,0.2)]">
        <h2 className="text-3xl font-bold mb-1 text-green-500">&gt; NÚCLEO DE LA TRIPULACIÓN_</h2>
        <p className="text-green-700 text-sm">Selecciona una silueta en el túnel de código para acceder al expediente.</p>
      </div>
      <div className="relative w-full rounded-lg border-2 border-green-900 shadow-[0_0_30px_rgba(0,255,65,0.15)] bg-black h-[550px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 z-20 w-full h-full">
          {tripulantes.map((trip) => (
            <div key={trip.id} onClick={() => navigate(`/integrantes/${trip.id}`)} className="group relative flex flex-col justify-end items-center pb-12 cursor-pointer h-full">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img src={trip.img} alt={trip.nombre} className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:brightness-150 group-hover:contrast-125 group-hover:drop-shadow-[0_0_20px_rgba(0,255,65,0.8)]" />
              </div>
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-green-500/20 mix-blend-screen" />
              <div className="w-4/5 bg-black/95 border border-green-900 px-4 py-2 rounded transform transition-all duration-500 group-hover:border-green-400 group-hover:shadow-[0_0_40px_rgba(0,255,65,0.9)] group-hover:-translate-y-3 relative z-30">
                <p className="text-green-700 group-hover:text-green-400 font-bold text-xl tracking-widest text-center">{trip.nombre}</p>
                <p className="text-green-900 group-hover:text-green-500 text-xs text-center uppercase tracking-widest mt-1">{trip.rol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}