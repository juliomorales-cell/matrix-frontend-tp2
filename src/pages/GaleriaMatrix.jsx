import { useState, useEffect, useRef } from "react";

// Array completo con las imágenes reales de tu carpeta public
const matrixImages = [
  { src: "/machines-in-the-matrix.webp", alt: "Machines in the Matrix" },
  { src: "/Matrix sentinelas.jpg", alt: "Matrix Sentinelas" },
  { src: "/the_matrix_nave.jpg", alt: "Nave de Matrix" },
  {
    src: "/ciudad-subterranea.jpg",
    alt: "Ciudad Subterránea",
  },
  { src: "/Matrix-lluvia-ciudad-.avif", alt: "Lluvia en la Ciudad Matrix" },
  { src: "/Ciudad matrix.jpg", alt: "Ciudad Matrix" },
  { src: "/Codigos Matrix.png", alt: "Códigos Matrix" },
  { src: "/matrix yo.png", alt: "Matrix Yo" },
  { src: "/Matrix-the-matrix-yo.jpg", alt: "The Matrix Yo" },
  { src: "/Matrix.jpeg", alt: "Matrix Portada" },
  { src: "/corridor.png", alt: "Pasillo Matrix" },
];

export default function GaleriaMatrix() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  // Iniciamos asumiendo que el audio intentará reproducirse
  const [audioPlaying, setAudioPlaying] = useState(true);
  const audioRef = useRef(null);

  // Intentar reproducir el audio al montar el componente y pausar al desmontar
  useEffect(() => {
    if (audioRef.current && audioPlaying) {
      audioRef.current.play().catch((err) => {
        console.log(
          "El navegador pide interacción previa para iniciar el sonido:",
          err
        );
        setAudioPlaying(false); // Si lo bloquea, actualizamos el botón a "muteado"
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const closeLightbox = () => {
    setSelectedIndex(null);
    setIsZoomed(false);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === matrixImages.length - 1 ? 0 : prev + 1
    );
    setIsZoomed(false);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? matrixImages.length - 1 : prev - 1
    );
    setIsZoomed(false);
  };

  // Manejo de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setIsZoomed(false);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current
        .play()
        .catch((err) => console.log("Reproducción bloqueada:", err));
      setAudioPlaying(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white font-mono p-6 relative">
      {/* Reproductor de audio (oculto) */}
      <audio
        ref={audioRef}
        src="/Matrix Act 1 the awakeni.mp4" // Recomendado: convertir a .mp3 o .ogg
        loop
        autoPlay // Forzamos el autoPlay
        preload="auto"
      />

      {/* Botón de activación de sonido */}
      <button
        onClick={toggleAudio}
        className={`fixed top-24 right-6 z-40 border px-4 py-2 rounded text-xs font-bold tracking-widest transition-all duration-300 ${
          audioPlaying
            ? "bg-green-500 text-black border-green-400 shadow-[0_0_15px_rgba(0,255,65,0.6)]"
            : "text-green-500 border-green-800 hover:border-green-400 hover:shadow-[0_0_10px_rgba(0,255,65,0.4)]"
        }`}
        title={audioPlaying ? "Pausar música" : "Activar música ambiental"}
      >
        {audioPlaying ? "🔊 SONIDO ACTIVO" : "🔇 ACTIVAR SONIDO"}
      </button>

      <h2 className="text-3xl font-bold text-green-500 mb-8 text-center tracking-widest uppercase border-b border-green-900 pb-4">
        // Archivos_Nave_Nebuchadnezzar_
      </h2>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full relative z-10">
        {matrixImages.map((img, index) => (
          <div
            key={index}
            className="flex flex-col h-72 border border-green-900 bg-zinc-950 rounded-lg overflow-hidden cursor-pointer hover:border-green-400 shadow-md shadow-green-900/10 transition-all duration-300 group"
            onClick={() => openLightbox(index)}
          >
            <div className="w-full h-56 overflow-hidden bg-black">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-2 text-center text-xs text-green-500 uppercase tracking-wider bg-black/60 border-t border-green-950">
              {img.alt}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-green-500 hover:text-white border border-green-500 bg-black px-4 py-2 text-xs rounded font-bold transition-colors z-50 tracking-widest"
            onClick={closeLightbox}
            title="Cerrar (Esc)"
          >
            CERRAR [ESC]
          </button>

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none z-50">
            <button
              className="text-green-500 hover:text-white text-3xl md:text-4xl bg-black/80 border border-green-500/50 hover:border-green-400 w-14 h-14 flex items-center justify-center rounded-full transition-all pointer-events-auto shadow-lg shadow-green-500/20"
              onClick={prevImage}
            >
              ◀
            </button>
            <button
              className="text-green-500 hover:text-white text-3xl md:text-4xl bg-black/80 border border-green-500/50 hover:border-green-400 w-14 h-14 flex items-center justify-center rounded-full transition-all pointer-events-auto shadow-lg shadow-green-500/20"
              onClick={nextImage}
            >
              ▶
            </button>
          </div>

          <div className="relative w-full max-w-4xl h-[75vh] flex flex-col items-center justify-center z-40">
            <div
              className={`flex-1 w-full flex items-center justify-center overflow-auto rounded ${
                isZoomed ? "items-start" : ""
              }`}
            >
              <img
                src={matrixImages[selectedIndex].src}
                alt={matrixImages[selectedIndex].alt}
                className={`max-w-full object-contain rounded border border-green-500 shadow-2xl shadow-green-500/30 transition-transform duration-300 ${
                  isZoomed
                    ? "scale-[1.7] cursor-zoom-out origin-center"
                    : "scale-100 cursor-zoom-in max-h-[65vh]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
              />
            </div>
            <p className="mt-4 text-green-400 text-sm tracking-widest bg-black/80 px-4 py-2 border border-green-900 rounded uppercase shrink-0">
              {matrixImages[selectedIndex].alt} — [{selectedIndex + 1} /{" "}
              {matrixImages.length}]
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
