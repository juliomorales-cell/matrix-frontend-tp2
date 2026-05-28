import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const techLogos = {
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  NoSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  UML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
};

const DUNK_MSGS = [
  "¡TRIPLE! Rodrigo esta sumando puntos...",
  "VOLCADA! La Matrix no puede detenerlo.",
  "¡OTRO MÁS! Optimiza las queries SQL igual que sus tiros libres.",
  "¡IMPARABLE! Anomalías: 0. Puntos: infinitos.",
  "¡RÉCORD HISTÓRICO! Rodrigo Esquiva defensores como Neo.",
];

const SKILLS_WITH_PCT = [
  { name: "JavaScript", pct: 92 },
  { name: "TypeScript", pct: 85 },
  { name: "SQL", pct: 90 },
  { name: "NoSQL", pct: 50 },
  { name: "Docker", pct: 78 },
  { name: "UML", pct: 75 },
  { name: "React", pct: 88 },
  { name: "Git", pct: 87 },
];

export default function PerfilRodrigo({ tripulante }) {
  const navigate = useNavigate();
  const [dunks, setDunks] = useState(0);
  const handleDunk = () => setDunks((d) => d + 1);

  const barsRef = useRef(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setBarsVisible(true)
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const redes = [
    { nombre: "github", url: tripulante.github || "#", label: "GITHUB" },
    { nombre: "linkedin", url: "#", label: "LINKEDIN" },
    { nombre: "twitter", url: "#", label: "TWITTER" },
  ];

  const proyectos = tripulante.proyectos || [
    {
      titulo: "E-commerce Matrix",
      descripcion: "Tienda online con React y Firebase.",
      imagen:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=60",
    },
    {
      titulo: "Dashboard Zion",
      descripcion: "Panel de monitoreo en tiempo real.",
      imagen:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=60",
    },
    {
      titulo: "Portfolio Cyberpunk",
      descripcion: "Sitio personal con efectos glitch.",
      imagen:
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&q=60",
    },
  ];

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-6 py-8"
      style={{
        backgroundImage: 'url("/rodrigo.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      {/* overlay */}
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
            SYSTEM_TERMINAL // TRIPULANTE_02
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
          {/* Avatar col */}
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
                src={`/${tripulante.avatar}`}
                alt={tripulante.nombre}
                className="rounded-full object-cover"
                style={{
                  width: 150,
                  height: 150,
                  border: "3px solid #000",
                  position: "relative",
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
                `LOC: ${tripulante.ubicacion || "ZION"}`,
                `AGE: ${tripulante.edad || "??"}`,
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
                  {tripulante.nivel}
                </span>
              </div>
            </div>
          </div>

          {/* Info col */}
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
                className="group relative flex flex-col items-center justify-center w-[76px] h-[76px] rounded-lg cursor-default transition-all duration-250 hover:-translate-y-1"
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
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,255,0,0.25)";
                  e.currentTarget.style.boxShadow = "none";
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
                className="rounded-lg overflow-hidden transition-all duration-250 cursor-default"
                style={{ border: "1px solid rgba(0,255,0,0.25)" }}
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
                  className="w-full block"
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

        {/* ── CINE ── */}
        <Section title="ENTRETENIMIENTO AUTORIZADO — CINE">
          <div className="flex gap-3 overflow-x-auto pb-1.5">
            {(tripulante.peliculas || []).map((p, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[88px] rounded-md overflow-hidden cursor-default transition-all duration-200 group"
                style={{ border: "1px solid rgba(0,255,0,0.25)" }}
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
            ))}
          </div>
        </Section>

        {/* ── MUSICA ── */}
        <Section title="FRECUENCIAS AUTORIZADAS — MÚSICA">
          <div className="flex gap-3 overflow-x-auto pb-1.5">
            {(tripulante.discos || []).map((d, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[88px] rounded-md overflow-hidden cursor-default transition-all duration-200 group"
                style={{ border: "1px solid rgba(0,255,0,0.25)" }}
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
                  src={d.cover}
                  alt={d.titulo}
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
                  {d.titulo}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── REDES ── */}
        <Section title="ENLACES DE CONTACTO">
          <div className="flex flex-col gap-3">
            {redes.map((r) => (
              <a
                key={r.nombre}
                href={r.url}
                target="_blank"
                rel="noreferrer"
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
            onClick={handleDunk}
            className="rounded-lg px-5 py-4 cursor-pointer select-none transition-all duration-200"
            style={{ border: "1px solid rgba(0,255,0,0.25)" }}
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
              // CLICKEAR PARA DESCLASIFICAR
            </p>
            <div className="flex items-center gap-4">
              <span
                key={dunks}
                className="text-4xl"
                style={{
                  display: "inline-block",
                  animation:
                    dunks > 0
                      ? "pr-bounce .45s cubic-bezier(.17,.67,.83,.67)"
                      : "none",
                }}
              >
                🏀
              </span>
              <div>
                <p
                  className="font-mono text-xs text-[#00FF00] leading-relaxed"
                  style={{ opacity: 0.8 }}
                >
                  {dunks === 0
                    ? "[ DATO CLASIFICADO: FANÁTICO DEL BASKET ]"
                    : DUNK_MSGS[(dunks - 1) % DUNK_MSGS.length]}
                </p>
                {dunks > 0 && (
                  <p
                    className="font-mono text-[10px] mt-1"
                    style={{ color: "rgba(0,255,0,0.45)" }}
                  >
                    &gt; PUNTOS ACUMULADOS: {dunks * 3}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Section>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pr-bounce { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-20px)} 70%{transform:translateY(-9px)} }
      `}</style>
    </div>
  );
}

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
