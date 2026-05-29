import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// ─── Diccionario de logos ───
const techLogos = {
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  NoSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  Canva: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg',
  Figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  UML: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/UML_logo.svg',
  Default: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
};

// ─── Barras de progreso (ESTILOS INLINE GARANTIZADOS) ───
function BarrasProgreso({ habilidades }) {
  const [porcentajes, setPorcentajes] = useState(habilidades.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setPorcentajes(habilidades.map((h) => h.porcentaje));
    }, 400);
    return () => clearTimeout(timer);
  }, [habilidades]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {habilidades.map((hab, i) => (
        <div key={hab.nombre}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#00FF41', fontFamily: 'monospace', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
            <span>{hab.nombre}</span>
            <span>{porcentajes[i]}%</span>
          </div>
          {/* Track */}
          <div style={{ width: '100%', height: '12px', backgroundColor: 'rgba(0,255,65,0.2)', borderRadius: '9999px', border: '1px solid #00FF41', overflow: 'hidden' }}>
            {/* Relleno animado */}
            <div
              style={{
                height: '100%',
                width: `${porcentajes[i]}%`,
                background: 'linear-gradient(90deg, #16a34a, #4ade80)',
                borderRadius: '9999px',
                transition: 'width 1s ease-out',
                boxShadow: '0 0 10px #00FF41',
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Carrusel (estilizado con clases e inline si es necesario) ───
function CarruselProyectos({ proyectos }) {
  const [indice, setIndice] = useState(0);
  if (!proyectos || proyectos.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-green-400 text-lg font-bold mb-3 font-mono">// PROYECTOS DESTACADOS</h3>
      <div className="relative border border-green-800 p-4 rounded bg-black/60">
        <img src={proyectos[indice].imagen} alt={proyectos[indice].titulo} className="w-full h-40 object-cover rounded mb-3" />
        <h4 className="text-green-300 font-semibold">{proyectos[indice].titulo}</h4>
        <p className="text-green-200/70 text-sm mt-1">{proyectos[indice].descripcion}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setIndice(prev => (prev === 0 ? proyectos.length - 1 : prev - 1))}
            style={{ backgroundColor: 'rgba(0,255,65,0.2)', color: '#00FF41', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontFamily: 'monospace', fontSize: '1.25rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={e => e.target.style.backgroundColor = 'rgba(0,255,65,0.5)'}
            onMouseLeave={e => e.target.style.backgroundColor = 'rgba(0,255,65,0.2)'}
          >
            ◀
          </button>
          <span className="text-green-400 text-sm">{indice + 1} / {proyectos.length}</span>
          <button
            onClick={() => setIndice(prev => (prev === proyectos.length - 1 ? 0 : prev + 1))}
            style={{ backgroundColor: 'rgba(0,255,65,0.2)', color: '#00FF41', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontFamily: 'monospace', fontSize: '1.25rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={e => e.target.style.backgroundColor = 'rgba(0,255,65,0.5)'}
            onMouseLeave={e => e.target.style.backgroundColor = 'rgba(0,255,65,0.2)'}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Redes sociales con color forzado mediante prop "color" ───
function RedesSociales({ redes }) {
  const iconos = {
    github: <FaGithub size={24} color="#00FF41" />,
    linkedin: <FaLinkedin size={24} color="#00FF41" />,
    twitter: <FaTwitter size={24} color="#00FF41" />,
  };

  return (
    <div className="flex gap-5 mt-4">
      {redes.map((red) => (
        <a
          key={red.nombre}
          href={red.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#00FF41', transition: 'all 0.3s', display: 'inline-block' }}
          className="hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.9)]"
          title={red.nombre}
        >
          {iconos[red.nombre] || <FaGithub size={24} color="#00FF41" />}
        </a>
      ))}
    </div>
  );
}

// ─── PerfilBase con padding reforzado inline ───
export default function PerfilBase({ tripulante, onBack, children }) {
  const navigate = useNavigate();
  const goBack = onBack || (() => navigate('/integrantes'));

  let skills = [...(tripulante.habilidades || [])];
  const defaults = ['Git', 'HTML5', 'CSS3', 'JavaScript', 'React'];
  defaults.forEach(def => {
    if (skills.length < 5 && !skills.includes(def) && !skills.some(s => s.includes(def.replace('5','').replace('3','')))) {
      skills.push(def);
    }
  });

  const habilidadesConPorcentaje = skills.map(h => ({
    nombre: h,
    porcentaje: Math.floor(Math.random() * 20) + 75,
  }));

  const proyectos = tripulante.proyectos || [
    { titulo: 'E-commerce Matrix', descripcion: 'Tienda online con React y Firebase.', imagen: '/img/proyecto1.jpg' },
    { titulo: 'Dashboard Zion', descripcion: 'Panel de monitoreo en tiempo real.', imagen: '/img/proyecto2.jpg' },
    { titulo: 'Portfolio Cyberpunk', descripcion: 'Sitio personal con efectos glitch.', imagen: '/img/proyecto3.jpg' },
  ];

  const redes = tripulante.redes || [
    { nombre: 'github', url: tripulante.github || '#' },
    { nombre: 'linkedin', url: '#' },
    { nombre: 'twitter', url: '#' },
  ];

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 4rem)',
        paddingLeft: '3rem',
        paddingRight: '3rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("/Habitacion-Martin.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        zIndex: 10,
      }}
      className="w-full"
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', pointerEvents: 'none' }}></div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '56rem',
          backgroundColor: 'rgba(0,0,0,0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '1rem',
          border: '2px solid #00FF00',
          boxShadow: '0 0 40px rgba(0,255,0,0.3)',
          marginLeft: '1rem', // para alejar de la sidebar
        }}
        className="flex flex-col overflow-hidden"
      >
        {/* Barra superior */}
        <div className="bg-[#00FF00]/10 border-b-2 border-[#00FF00] p-3 flex justify-between items-center shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_red]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_yellow]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_green]"></div>
          </div>
          <span className="text-[#00FF00] font-mono text-xs font-bold tracking-[0.3em]">SYSTEM_TERMINAL // {tripulante.id}</span>
          <button onClick={goBack} className="text-[#00FF00] hover:text-white font-mono font-bold text-lg leading-none hover:drop-shadow-[0_0_8px_#00FF00] transition-all" title="Cerrar Terminal">×</button>
        </div>

        <div className="flex flex-col md:flex-row p-6 md:p-10 gap-8 lg:gap-12 flex-1 items-center md:items-start">
          {/* Columna izquierda */}
          <div className="flex flex-col items-center gap-6 shrink-0 w-full md:w-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#00FF00] rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#00FF00] bg-black shadow-[0_0_20px_rgba(0,255,0,0.6)]">
                <img src={tripulante.avatar} alt={tripulante.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="absolute bottom-2 right-2 bg-black border-2 border-[#00FF00] text-[#00FF00] w-8 h-8 flex items-center justify-center rounded-full font-bold font-mono shadow-[0_0_10px_rgba(0,255,0,0.8)]">
                {tripulante.genero === 'mujer' ? '♀' : '♂'}
              </span>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-[200px]">
              <div className="border border-[#00FF00]/50 bg-[#00FF00]/10 text-[#00FF00] font-mono text-xs font-bold px-3 py-2 rounded text-center shadow-[0_0_10px_rgba(0,255,0,0.1)]">LOC: {tripulante.ubicacion || 'ZION'}</div>
              <div className="border border-[#00FF00]/50 bg-[#00FF00]/10 text-[#00FF00] font-mono text-xs font-bold px-3 py-2 rounded text-center shadow-[0_0_10px_rgba(0,255,0,0.1)]">AGE: {tripulante.edad || 'DESCONOCIDA'}</div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col flex-1 gap-6 w-full min-w-0">
            <div className="border-b border-[#00FF00]/30 pb-4">
              <h1 className="text-4xl lg:text-5xl font-black text-[#00FF00] font-mono tracking-widest uppercase drop-shadow-[0_0_15px_rgba(0,255,0,0.8)] flex items-center flex-wrap gap-2">
                {tripulante.nombre}
                <span className="inline-block w-4 h-10 bg-[#00FF00] animate-[blink_1s_infinite] shadow-[0_0_10px_#00FF00]"></span>
              </h1>
              <h2 className="text-xl font-bold text-white font-mono mt-2 tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">ROL: {tripulante.rol}</h2>
            </div>

            {/* Bio con fondo oscuro garantizado */}
            <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(0,255,0,0.4)', padding: '1.25rem', borderRadius: '0.5rem', backdropFilter: 'blur(4px)' }}>
              <p style={{ color: '#00FF00', fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: '1.6', textAlign: 'justify', opacity: 0.9 }}>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>&gt;</span>
                {tripulante.bio}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-[#00FF00] font-mono font-bold text-sm tracking-widest mb-4 flex items-center gap-2">
                <span>⚡</span> TECH STACK CARGADO
              </h3>
              <div className="flex flex-wrap gap-4 mb-6">
                {skills.map((h, i) => {
                  const logoUrl = techLogos[h] || techLogos[h.replace(/\d+/, '')] || techLogos['Default'];
                  return (
                    <div key={`${h}-${i}`} className="group relative flex flex-col items-center justify-center p-3 w-20 h-20 border border-[#00FF00]/30 rounded-lg bg-black/50 hover:border-[#00FF00] hover:bg-[#00FF00]/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,0,0.5)] transition-all duration-300 cursor-default">
                      <img src={logoUrl} alt={h} className="w-10 h-10 object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.8)] transition-all" />
                      <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 text-[#00FF00] font-mono text-[10px] font-bold whitespace-nowrap transition-opacity">{h}</span>
                    </div>
                  );
                })}
              </div>

              <h4 className="text-[#00FF00] font-mono font-bold text-xs tracking-widest mb-3">// DOMINIO DE HABILIDADES</h4>
              <BarrasProgreso habilidades={habilidadesConPorcentaje} />
            </div>

            <CarruselProyectos proyectos={proyectos} />

            <div className="mt-6">
              <h3 className="text-[#00FF00] font-mono font-bold text-xs tracking-widest mb-3">// ENLACES DE CONTACTO</h3>
              <RedesSociales redes={redes} />
            </div>

            {children && (
              <div className="mt-auto pt-6 border-t border-[#00FF00]/30">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}