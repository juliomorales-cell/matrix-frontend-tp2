import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

// ── DATOS DE SKILLS ──────────────────────────────────────────────────────────
const techLogos = {
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
};

const SKILLS_WITH_PCT = [
  { name: "HTML5", pct: 92 },
  { name: "CSS3", pct: 76 },
  { name: "JavaScript", pct: 85 },
  { name: "React", pct: 88 },
  { name: "Node.js", pct: 83 },
  { name: "Python", pct: 85 },
];

// ── EASTER EGG ───────────────────────────────────────────────────────────────
const TRANSMISION_MSGS = [
  "TRANSMISIÓN INICIADA... conectando al Nebuchadnezzar.",
  "PROTOCOLO ACTIVO. Los agentes no pueden interceptar esto.",
  "ENLACE NEURONAL ESTABLECIDO. Bienvenido, Operador.",
  "ZION ONLINE. Todos los nodos respondiendo.",
  "ACCESO TOTAL CONCEDIDO. La Matrix no sabe que estás aquí.",
];

// ── COMPONENTES AUXILIARES ──────────────────────────────────────────────────

function Section({ title, children }) {
  return (
    <div
      className="px-8 py-6 border-b"
      style={{ borderColor: "rgba(0,255,0,0.1)" }}
    >
      <p className="font-mono text-[10.5px] text-[#00FF00] tracking-[0.3em] opacity-65 mb-4 flex items-center gap-2">
        <span
          style={{
            display: "block",
            width: 18,
            height: 1,
            background: "#00FF00",
            opacity: 0.5,
          }}
        />
        {title}
      </p>
      {children}
    </div>
  );
}

function Carrusel({ items, children }) {
  const [indice, setIndice] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndice = Math.max(0, items.length - visibleCount);
  const avanzar = () => setIndice((prev) => Math.min(prev + 1, maxIndice));
  const retroceder = () => setIndice((prev) => Math.max(prev - 1, 0));

  // Estilo mejorado para botones bien visibles
  const btnStyle = {
    background: "rgba(0, 0, 0, 0.85)",
    border: "2px solid #00FF00",
    color: "#00FF00",
    fontFamily: "monospace",
    fontSize: "2rem",
    fontWeight: "bold",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "50%",
    boxShadow: "0 0 12px rgba(0,255,0,0.5)",
    zIndex: 20,
    transition: "all 0.2s",
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden py-2">
      {/* Botón izquierdo */}
      {indice > 0 && (
        <button
          onClick={retroceder}
          className="absolute left-1 top-1/2 -translate-y-1/2"
          style={btnStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#00FF00";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.85)";
            e.currentTarget.style.color = "#00FF00";
          }}
          aria-label="Anterior"
        >
          ‹
        </button>
      )}

      {/* Botón derecho */}
      {indice < maxIndice && (
        <button
          onClick={avanzar}
          className="absolute right-1 top-1/2 -translate-y-1/2"
          style={btnStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#00FF00";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.85)";
            e.currentTarget.style.color = "#00FF00";
          }}
          aria-label="Siguiente"
        >
          ›
        </button>
      )}

      {/* Track deslizable */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${(indice * 100) / visibleCount}%)` }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-1"
            style={{ width: `${100 / visibleCount}%` }}
          >
            {children(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ DiscoCard con soporte para Guns N' Roses
function DiscoCard({ disco }) {
  const getAudioSrc = (titulo, artista = "") => {
    const t = `${titulo} ${artista}`.toLowerCase();
    if (t.includes("tengo que parar")) return "/tengo_que_parar.mp3";
    if (t.includes("giros")) return "/giros.mp3";
    if (t.includes("the black album")) return "/the_black_album.mp3";
    if (t.includes("guns") && t.includes("roses")) return "/guns_n_roses.mp3";
    return null;
  };

  const audioRef = useRef(null);

  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderColor = "#00FF00";
    e.currentTarget.style.boxShadow = "0 0 12px rgba(0,255,0,0.3)";

    const src = getAudioSrc(disco.titulo, disco.artista);
    if (!src) return;
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
    } else {
      audioRef.current.src = src;
    }
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.borderColor = "rgba(0,255,0,0.25)";
    e.currentTarget.style.boxShadow = "none";

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-md overflow-hidden cursor-default group"
      style={{
        border: "1px solid rgba(0,255,0,0.25)",
        transition: "border-color .2s, box-shadow .2s",
      }}
    >
      <img
        src={disco.cover}
        alt={disco.titulo}
        className="w-full block"
        style={{
          filter: "grayscale(15%) sepia(10%) hue-rotate(80deg) saturate(.8)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 font-mono text-[9px] text-[#00FF00] px-1.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity leading-snug"
        style={{ background: "rgba(0,0,0,0.88)" }}
      >
        {disco.titulo}
      </div>
    </div>
  );
}

// ── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export default function PerfilMartin({ tripulante }) {
  const navigate = useNavigate();
  const [transmisiones, setTransmisiones] = useState(0);
  const [transmitiendo, setTransmitiendo] = useState(false);

  const handleTransmision = () => {
    if (transmitiendo) return;
    setTransmitiendo(true);
    setTimeout(() => setTransmitiendo(false), 1200);
    setTransmisiones((t) => t + 1);
  };

  const barsRef = useRef(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setBarsVisible(true);
    });
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Mapeo de imágenes locales para películas (mejorado para detectar extensión)
  const peliculas = (tripulante.peliculas || []).map((p) => {
    const tituloLower = p.titulo.toLowerCase();
    if (
      tituloLower.includes("interestelar") ||
      tituloLower.includes("interstellar")
    ) {
      return { ...p, poster: "/Interestelar.jpg" };
    }
    if (tituloLower.includes("esperando la carroza"))
      return { ...p, poster: "/esperando_la_carroza.jpg" };
    return p;
  });

  // Mapeo de covers para discos
  const discos = (tripulante.discos || []).map((d) => {
    const tituloLower = d.titulo.toLowerCase();
    if (tituloLower.includes("tengo que parar"))
      return { ...d, cover: "/tengo_que_parar.jpg" };
    if (tituloLower.includes("giros")) return { ...d, cover: "/giros.jpg" };
    if (tituloLower.includes("the black album"))
      return { ...d, cover: "/the_black_album.jpg" };
    if (tituloLower.includes("guns"))
      return { ...d, cover: "/guns_n_roses.jpg" }; // Asegurate de tener esta imagen
    return d;
  });

  const redes = [
    { nombre: "github", url: tripulante.github || "#", label: "GITHUB" },
    { nombre: "linkedin", url: tripulante.linkedin || "#", label: "LINKEDIN" },
    { nombre: "facebook", url: tripulante.facebook || "#", label: "FACEBOOK" },
  ];

  const proyectos = tripulante.proyectos || [
    {
      titulo: "Nebuchadnezzar OS",
      descripcion: "Sistema operativo central del hovercraft.",
      imagen:
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400&q=60",
    },
    {
      titulo: "Construct Training",
      descripcion: "Programa de simulación de combate.",
      imagen: "/martin_portada.png",
    },
    {
      titulo: "Zion Mainframe",
      descripcion: "Infraestructura de defensa de Zion.",
      imagen:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=60",
    },
    {
      titulo: "Operator's Deck",
      descripcion: "Interfaz de monitoreo de la Matrix.",
      imagen:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=60",
    },
  ];

  return (
    <>
      <SEO
        title={tripulante.nombre}
        description={tripulante.bio}
        image={tripulante.avatar}
      />

      <div
        className="w-full min-h-screen flex items-center justify-center px-6 py-8"
        style={{
          backgroundImage: 'url("/martin.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.75)", pointerEvents: "none" }}
        />

        <div
          className="relative w-full flex flex-col overflow-hidden"
          style={{
            maxWidth: "860px",
            backgroundColor: "rgba(0,0,0,0.97)",
            border: "2px solid #00FF00",
            borderRadius: "12px",
            boxShadow: "0 0 60px rgba(0,255,0,0.15)",
          }}
        >
          {/* ── TOPBAR ── */}
          <div
            className="flex justify-between items-center px-4 py-2.5 border-b"
            style={{
              background: "rgba(0,255,0,0.08)",
              borderColor: "rgba(0,255,0,0.35)",
            }}
          >
            <div className="flex gap-2">
              <div
                className="w-3 h-3 rounded-full bg-red-500"
                style={{ boxShadow: "0 0 6px #ff5f57" }}
              />
              <div
                className="w-3 h-3 rounded-full bg-yellow-400"
                style={{ boxShadow: "0 0 6px #febc2e" }}
              />
              <div
                className="w-3 h-3 rounded-full bg-green-400"
                style={{ boxShadow: "0 0 6px #28c840" }}
              />
            </div>
            <span className="font-mono text-[11px] text-[#00FF00] tracking-[0.25em] opacity-80">
              SYSTEM_TERMINAL // TRIPULANTE_01
            </span>
            <button
              onClick={() => navigate("/integrantes")}
              className="text-[#00FF00] font-mono text-xl leading-none opacity-70 hover:opacity-100 transition-opacity"
            >
              ×
            </button>
          </div>

          {/* ── HERO ── */}
          <div
            className="flex flex-col md:flex-row gap-8 px-8 py-8 border-b"
            style={{ borderColor: "rgba(0,255,0,0.1)" }}
          >
            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              <div className="relative" style={{ width: 150, height: 150 }}>
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "2px solid #00FF00",
                    inset: "-4px",
                    position: "absolute",
                    borderRadius: "50%",
                    boxShadow: "0 0 20px rgba(0,255,0,0.4)",
                  }}
                />
                <img
                  src="/martin_portada.png"
                  alt={tripulante.nombre}
                  className="rounded-full object-cover"
                  style={{
                    width: 150,
                    height: 150,
                    border: "3px solid #000",
                    position: "relative",
                    objectPosition: "center top",
                  }}
                />
                <span
                  className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-black flex items-center justify-center text-[#00FF00] font-mono text-xs"
                  style={{ border: "2px solid #00FF00" }}
                >
                  {tripulante.genero === "mujer" ? "♀" : "♂"}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 w-[150px]">
                {[
                  `LOC: ${tripulante.ubicacion || "CABA"}`,
                  `AGE: ${tripulante.edad || "47"}`,
                ].map((t) => (
                  <div
                    key={t}
                    className="font-mono text-[10px] text-[#00FF00] tracking-[0.2em] text-center px-2 py-1.5 rounded"
                    style={{
                      border: "1px solid rgba(0,255,0,0.4)",
                      background: "rgba(0,255,0,0.04)",
                    }}
                  >
                    {t}
                  </div>
                ))}
                <div className="flex items-center gap-2 justify-center mt-1">
                  <div
                    className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse"
                    style={{ boxShadow: "0 0 6px #00FF00" }}
                  />
                  <span
                    className="font-mono text-[10px] text-[#00FF00] tracking-[0.2em] px-2 py-1 rounded"
                    style={{
                      border: "1px solid #00FF00",
                      background: "rgba(0,255,0,0.07)",
                    }}
                  >
                    {tripulante.nivel || "SENIOR"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <div
                className="border-b pb-4"
                style={{ borderColor: "rgba(0,255,0,0.2)" }}
              >
                <h1
                  className="font-black text-[#00FF00] tracking-widest uppercase flex items-center gap-2 flex-wrap"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "2.2rem",
                    lineHeight: 1,
                  }}
                >
                  {tripulante.nombre}
                  <span
                    className="inline-block w-[3px] h-9 bg-[#00FF00] animate-[blink_1s_step-end_infinite]"
                    style={{ boxShadow: "0 0 8px #00FF00" }}
                  />
                </h1>
                <p className="font-mono text-white tracking-[0.2em] text-sm mt-2 opacity-85 uppercase">
                  ROL: {tripulante.rol}
                </p>
              </div>
              <div
                className="rounded-md px-4 py-4"
                style={{
                  background: "rgba(0,0,0,0.7)",
                  border: "1px solid rgba(0,255,0,0.3)",
                }}
              >
                <p className="font-mono text-[12.5px] text-[#00FF00] leading-7 text-justify opacity-90">
                  <span className="font-bold mr-2">&gt;</span>
                  {tripulante.bio}
                </p>
              </div>
            </div>
          </div>

          {/* ── TECH STACK ── */}
          <Section title="TECH STACK CARGADO">
            <div className="flex flex-wrap gap-2.5 mb-5">
              {SKILLS_WITH_PCT.map((s) => (
                <div
                  key={s.name}
                  className="group relative flex flex-col items-center justify-center w-[76px] h-[76px] rounded-lg cursor-default"
                  style={{
                    border: "1px solid rgba(0,255,0,0.25)",
                    background: "rgba(0,0,0,0.6)",
                    transition:
                      "border-color .25s, box-shadow .25s, transform .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00FF00";
                    e.currentTarget.style.boxShadow =
                      "0 0 16px rgba(0,255,0,0.35)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,255,0,0.25)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <img
                    src={techLogos[s.name]}
                    alt={s.name}
                    style={{ width: 38, height: 38, objectFit: "contain" }}
                  />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#00FF00] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] text-[#00FF00] tracking-widest opacity-60 mb-3">
              // DOMINIO DE HABILIDADES
            </p>
            <div
              ref={barsRef}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              {SKILLS_WITH_PCT.map((s) => (
                <div
                  key={s.name}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      color: "#00FF00",
                      width: 110,
                      flexShrink: 0,
                      opacity: 0.7,
                    }}
                  >
                    {s.name}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: 10,
                      background: "rgba(0,255,0,0.12)",
                      borderRadius: 2,
                    }}
                  >
                    <div
                      style={{
                        width: barsVisible ? `${s.pct}%` : "0%",
                        height: "100%",
                        background: "#00FF00",
                        borderRadius: 2,
                        transition: "width 2.5s cubic-bezier(.4,0,.2,1)",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 10,
                      color: "#00FF00",
                      width: 32,
                      textAlign: "right",
                      opacity: 0.5,
                    }}
                  >
                    {s.pct}%
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* ── PROYECTOS ── */}
          <Section title="PROYECTOS DESPLEGADOS">
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              }}
            >
              {proyectos.map((p, i) => (
                <div
                  key={i}
                  className="group rounded-lg overflow-hidden cursor-default"
                  style={{
                    border: "1px solid rgba(0,255,0,0.25)",
                    transition: "border-color .25s, box-shadow .25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00FF00";
                    e.currentTarget.style.boxShadow =
                      "0 0 16px rgba(0,255,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,255,0,0.25)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img
                    src={p.imagen}
                    alt={p.titulo}
                    className="w-full block zoom-img"
                    style={{
                      height: 110,
                      objectFit: "cover",
                      filter:
                        "grayscale(40%) sepia(20%) hue-rotate(80deg) saturate(.7)",
                    }}
                  />
                  <div className="px-4 py-3">
                    <p className="font-mono text-[12px] text-[#00FF00] font-bold mb-1">
                      {p.titulo}
                    </p>
                    <p
                      className="font-mono text-[10.5px] leading-relaxed"
                      style={{ color: "rgba(0,255,0,0.65)" }}
                    >
                      {p.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── CINE (con carrusel mejorado) ── */}
          {peliculas.length > 0 && (
            <Section title="ENTRETENIMIENTO AUTORIZADO — CINE">
              <Carrusel items={peliculas}>
                {(p) => (
                  <div
                    className="relative rounded-md overflow-hidden cursor-default group"
                    style={{
                      border: "1px solid rgba(0,255,0,0.25)",
                      transition: "border-color .2s, box-shadow .2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#00FF00";
                      e.currentTarget.style.boxShadow =
                        "0 0 12px rgba(0,255,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,255,0,0.25)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <img
                      src={p.poster}
                      alt={p.titulo}
                      className="w-full block"
                      style={{
                        filter:
                          "grayscale(15%) sepia(10%) hue-rotate(80deg) saturate(.8)",
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 font-mono text-[9px] text-[#00FF00] px-1.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity leading-snug"
                      style={{ background: "rgba(0,0,0,0.88)" }}
                    >
                      {p.titulo}
                    </div>
                  </div>
                )}
              </Carrusel>
            </Section>
          )}

          {/* ── MÚSICA (con carrusel y audio) ── */}
          {discos.length > 0 && (
            <Section title="FRECUENCIAS AUTORIZADAS — MÚSICA">
              <Carrusel items={discos}>
                {(d) => <DiscoCard disco={d} />}
              </Carrusel>
            </Section>
          )}

          {/* ── REDES ── */}
          <Section title="ENLACES DE CONTACTO">
            <div className="flex flex-col gap-3">
              {redes.map((r) => (
                <a
                  key={r.nombre}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] text-[#00FF00] opacity-60 hover:opacity-100 tracking-widest transition-opacity duration-200"
                >
                  {r.label}
                </a>
              ))}
            </div>
          </Section>

          {/* ── EASTER EGG ── */}
          <Section title="PROTOCOLO SECRETO — ACCESO RESTRINGIDO">
            <div
              onClick={handleTransmision}
              className="rounded-lg px-5 py-4 cursor-pointer select-none"
              style={{
                border: "1px solid rgba(0,255,0,0.25)",
                transition: "border-color .2s, background .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00FF00";
                e.currentTarget.style.background = "rgba(0,255,0,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,255,0,0.25)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <p className="font-mono text-[10px] text-[#00FF00] tracking-[0.3em] opacity-55 mb-2">
                // CLICKEAR PARA INICIAR TRANSMISIÓN
              </p>
              <div className="flex items-center gap-4">
                <span
                  key={transmisiones}
                  className="text-4xl"
                  style={{
                    display: "inline-block",
                    animation: transmitiendo
                      ? "tx-pulse .6s ease-in-out"
                      : "none",
                    filter: transmitiendo
                      ? "drop-shadow(0 0 12px #00FF00)"
                      : "none",
                    transition: "filter .3s",
                  }}
                >
                  📡
                </span>
                <div>
                  <p
                    className="font-mono text-xs text-[#00FF00] leading-relaxed"
                    style={{ opacity: 0.8 }}
                  >
                    {transmisiones === 0
                      ? "[ DATO CLASIFICADO: OPERADOR DEL NEBUCHADNEZZAR ]"
                      : TRANSMISION_MSGS[
                          (transmisiones - 1) % TRANSMISION_MSGS.length
                        ]}
                  </p>
                  {transmisiones > 0 && (
                    <p
                      className="font-mono text-[10px] mt-1"
                      style={{ color: "rgba(0,255,0,0.45)" }}
                    >
                      &gt; TRANSMISIONES ENVIADAS: {transmisiones} &nbsp;|&nbsp;
                      AGENTES ELUDIDOS: {transmisiones * 2}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Section>
        </div>

        <style>{`
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes tx-pulse { 0%{transform:scale(1)} 30%{transform:scale(1.35) rotate(-8deg)} 60%{transform:scale(0.9) rotate(5deg)} 100%{transform:scale(1)} }
        .zoom-img { transition: transform 0.4s ease; }
        .group:hover .zoom-img { transform: scale(1.1); }
      `}</style>
      </div>
    </>
  );
}
