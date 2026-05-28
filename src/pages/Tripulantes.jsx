import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Tripulantes({ tripulantes }) {
  const navigate = useNavigate();
  const [audioPlaying, setAudioPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && audioPlaying) {
      audioRef.current.play().catch(() => {});
    }
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, [audioPlaying]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setAudioPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div className="flex flex-col gap-6 z-10 relative pb-10">
      <audio
        ref={audioRef}
        src="/seleccion-tripulante.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleAudio}
        className={`fixed top-4 right-4 z-40 border px-3 py-1.5 rounded text-xs font-bold tracking-widest transition-all duration-300 ${
          audioPlaying
            ? "bg-green-500 text-black border-green-400 shadow-[0_0_15px_rgba(0,255,65,0.6)]"
            : "text-green-500 border-green-800 hover:border-green-400"
        }`}
      >
        {audioPlaying ? "🔊 ON" : "🔇 OFF"}
      </button>

      <div className="p-5 border border-green-500 bg-black/80 rounded shadow-[0_0_15px_rgba(0,255,65,0.2)]">
        <h2 className="text-2xl font-bold mb-1 text-green-500">
          &gt; NÚCLEO DE LA TRIPULACIÓN_
        </h2>
        <p className="text-green-700 text-sm">
          Selecciona una silueta para acceder al expediente.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {tripulantes.map((trip) => (
          <div
            key={trip.id}
            onClick={() => navigate(`/integrantes/${trip.id}`)}
            className="group relative cursor-pointer border border-green-900 rounded overflow-hidden bg-black hover:border-green-500 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300"
          >
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={trip.img}
                alt={trip.nombre}
                className="w-full h-full object-cover object-top transition-all duration-500 group-hover:brightness-125 group-hover:contrast-110 group-hover:drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]"
              />
            </div>

            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="p-3 border-t border-green-900 group-hover:border-green-700 transition-colors bg-black">
              <p className="text-green-400 font-bold text-sm tracking-widest text-center truncate group-hover:text-white transition-colors">
                {trip.nombre}
              </p>
              <p className="text-green-800 text-xs text-center uppercase tracking-widest mt-0.5 group-hover:text-green-500 transition-colors truncate">
                {trip.rol}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
