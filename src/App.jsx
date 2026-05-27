import Bitacora from './components/Bitacora';
import { useState, useEffect, useMemo, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Terminal, Users, Database, Globe, Image as ImageIcon, BookOpen, Search, Network } from 'lucide-react';
import MatrixRain from './components/MatrixRain';
import MatrixGallery from './components/MatrixGallery';
import PerfilMartin from './components/PerfilMartin';
import PerfilRodrigo from './components/PerfilRodrigo';
import PerfilFacundo from './components/PerfilFacundo';
import PerfilFlorencia from './components/PerfilFlorencia';
import ArbolRender from './components/ArbolRender';
import datosTripulantes from './data/tripulantes.json';

const tripulantes = [
  {
    id: 1,
    nombre: "MARTÍN",
    rol: "ZION OPERATOR",
    genero: "hombre",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Martin&baseColor=000000&primaryColor=00FF41",
    github: "https://github.com/usuario-martin",
    ubicacion: "CABA",
    edad: "47",
    bio: "Operador veterano del Nebuchadnezzar. Domina cada protocolo del sistema y mantiene los enlaces neuronales activos durante las inmersiones más peligrosas. Cuando no vigila la Matrix, sus frecuencias sonoras favoritas lo mantienen en sintonía con Zion.",
    habilidades: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Python"],
    peliculas: [
      { titulo: "Interstellar",            poster: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIE.jpg" },
      { titulo: "Volver al Futuro",        poster: "https://image.tmdb.org/t/p/w342/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg" },
      { titulo: "Matrix",                  poster: "https://image.tmdb.org/t/p/w342/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
      { titulo: "Esperando la Carroza",    poster: "https://image.tmdb.org/t/p/w342/5a8vfBTuJvNQnEH9AqG1xFOblMy.jpg" },
    ],
    discos: [
      { titulo: "Tengo que parar",              artista: "Miguel Mateos",  cover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Giros_F_Paez.jpg" },
      { titulo: "Giros",                        artista: "Fito Páez",       cover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Giros_F_Paez.jpg" },
      { titulo: "The Black Album",              artista: "Metallica",       cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Metallica_-_Metallica.jpg" },
      { titulo: "Appetite for Destruction",     artista: "Guns N' Roses",   cover: "https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg" },
    ],
    nivel: "OPERATOR",
    coverImage: "/matrix_operator.png",
    secreto: "🎵 Disco secreto: \"Sueño Stereo\" — Soda Stereo",
  },
  {
    id: 2,
    nombre: "RODRIGO",
    rol: "ZION REBEL",
    genero: "hombre",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Rodrigo&baseColor=000000&primaryColor=00FF41",
    github: "https://github.com/RodrigoZocco",
    ubicacion: "Argentina",
    edad: "27",
    bio: "Rebelde de Zion con un talento especial para los sistemas de datos y la arquitectura de red. Su pasión por el basket es tan intensa como su obsesión por optimizar consultas SQL. Detecta anomalías en la Matrix antes que nadie.",
    habilidades: ["JavaScript", "TypeScript", "SQL", "NoSQL", "Docker", "UML"],
    peliculas: [
      { titulo: "Peaky Blinders",        poster: "https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkPaQca.jpg" },
      { titulo: "Batman: El Caballero",  poster: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
      { titulo: "Interstellar",          poster: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIE.jpg" },
    ],
    discos: [
      { titulo: "Mejor que el silencio",  artista: "Nach Scratch",   cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Metallica_-_Metallica.jpg" },
      { titulo: "Hybrid Theory",          artista: "Linkin Park",    cover: "https://upload.wikimedia.org/wikipedia/en/9/9a/Hybrid_theory_album_cover.jpg" },
      { titulo: "Suena la Alarma",        artista: "Los Cafres",     cover: "https://upload.wikimedia.org/wikipedia/en/9/9a/Hybrid_theory_album_cover.jpg" },
    ],
    nivel: "CREW MEMBER",
    coverImage: "https://media.giphy.com/media/sULKEgDMX8LcI/giphy.gif",
    secreto: "🏀 Dato secreto: ¡fanático del basket! Clickea la pelota...",
  },
  {
    id: 3,
    nombre: "FACUNDO",
    rol: "SYSTEM ARCHITECT",
    genero: "hombre",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Facundo&baseColor=000000&primaryColor=00FF41",
    github: "https://github.com/usuario-facundo",
    ubicacion: "Entre Ríos",
    edad: "42",
    bio: "Arquitecto de sistemas con visión holística de la realidad digital. Construye los puentes entre el mundo simulado y la verdad. Su manejo del código es tan preciso como una espada de luz en la oscuridad de la Matrix.",
    habilidades: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "React"],
    peliculas: [
      { titulo: "The Lord of the Rings",  poster: "https://image.tmdb.org/t/p/w342/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" },
      { titulo: "The Matrix",             poster: "https://image.tmdb.org/t/p/w342/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
      { titulo: "Schindler's List",       poster: "https://image.tmdb.org/t/p/w342/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" },
    ],
    discos: [
      { titulo: "The Dark Side of the Moon",  artista: "Pink Floyd",    cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png" },
      { titulo: "Led Zeppelin IV",             artista: "Led Zeppelin",  cover: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg" },
      { titulo: "Nevermind",                   artista: "Nirvana",       cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg" },
    ],
    nivel: "CAPTAIN",
    coverImage: "https://media.giphy.com/media/G6sJqVpD1U4jC/giphy.gif",
    secreto: "🎉 ¡Hay un secreto oculto esperando ser descubierto!",
  },
  {
    id: 4,
    nombre: "FLORENCIA",
    rol: "SIGNAL OPERATOR",
    genero: "mujer",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Florencia&baseColor=000000&primaryColor=00FF41",
    github: "https://github.com/usuario-florencia",
    ubicacion: "González Catán",
    edad: "29",
    bio: "Operadora de señales con un talento único para diseñar las interfaces que conectan a los liberados con Zion. Su sensibilidad artística convierte el código en experiencias visuales que trascienden la simulación. La música de Cerati es su código fuente.",
    habilidades: ["HTML", "CSS", "JavaScript", "Canva"],
    peliculas: [
      { titulo: "Harry Potter",            poster: "https://image.tmdb.org/t/p/w342/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" },
      { titulo: "El Señor de los Anillos", poster: "https://image.tmdb.org/t/p/w342/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" },
      { titulo: "Soy Leyenda",             poster: "https://image.tmdb.org/t/p/w342/e6APHKVKkXeEKvqMnGDX39vJFR4.jpg" },
    ],
    discos: [
      { titulo: "Amor Amarillo",            artista: "Gustavo Cerati",  cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png" },
      { titulo: "Dynamo",                   artista: "Soda Stereo",     cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png" },
      { titulo: "A Head Full of Dreams",    artista: "Coldplay",        cover: "https://upload.wikimedia.org/wikipedia/en/9/9a/Hybrid_theory_album_cover.jpg" },
    ],
    nivel: "SIGNAL OPS",
    coverImage: "https://media.giphy.com/media/11tHioH2FhZUSI/giphy.gif",
    secreto: null,
  },
];

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-black text-green-500 font-mono overflow-hidden relative">
        <MatrixRain />

        <nav className="w-64 border-r-2 border-green-900 bg-black/90 flex flex-col z-10 shrink-0 shadow-[4px_0_20px_rgba(0,255,65,0.1)]">
          <div className="p-6 border-b-2 border-green-900 flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-black border-2 border-green-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,65,0.5)]">
              <Terminal size={32} className="text-green-500 animate-pulse" />
            </div>
            <h1 className="text-3xl font-black text-green-500 text-center tracking-tighter drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]">
              THE SYSTEM<br/>GROUP 1
            </h1>
          </div>
          
          <ul className="flex-1 p-6 space-y-4 overflow-y-auto">
            <NavItem to="/" icon={<Terminal size={24} />} text=">_Inicio" />
            <NavItem to="/integrantes" icon={<Users size={24} />} text="Tripulacion" />
            <NavItem to="/datos" icon={<Database size={24} />} text="Archivos JSON" />
            <NavItem to="/api" icon={<Globe size={24} />} text="Red Externa" />
            <NavItem to="/galeria" icon={<ImageIcon size={24} />} text="Galería" />
            <NavItem to="/bitacora" icon={<BookOpen size={24} />} text="Bitácora" />
            <NavItem to="/arbol" icon={<Network size={24} />} text="Árbol Render" />
          </ul>

          <div className="p-4 border-t-2 border-green-900 text-xs text-center text-green-800">
            V 2.0.26 - THE SYSTEM GROUP 1
          </div>
        </nav>

        <main className="flex-1 overflow-y-auto p-8 z-10 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Tripulacion />} />
            <Route path="/integrantes/:id" element={<PerfilTripulante />} />
            <Route path="/datos" element={<ArchivosJSON />} />
            <Route path="/api" element={<RedExterna />} />
            <Route path="/galeria" element={<MatrixGallery />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/arbol" element={<ArbolRender />} />
            <Route path="*" element={<h2 className="text-2xl text-green-500">&gt; ERROR 404: SECCIÓN NO ENCONTRADA_</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function NavItem({ to, icon, text }) {
  return (
    <li className="list-none">
      <Link 
        to={to} 
        className="flex items-center gap-3 p-2 text-lg font-bold text-[#00FF41] no-underline hover:text-white hover:translate-x-2 transition-all duration-300 rounded hover:bg-green-900/30 drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]"
      >
        <span className="text-[#00FF41]">{icon}</span>
        <span>{text}</span>
      </Link>
    </li>
  );
}

function Home() {
  const [fase, setFase] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioLlamadaRef = useRef(null);
  const audioTonoRef = useRef(null);

  const iniciarSecuencia = () => {
    setFase(1);
    if (audioLlamadaRef.current) {
      audioLlamadaRef.current.volume = 0.5;
      audioLlamadaRef.current.play().catch(() => console.log("Audio 1 bloqueado"));
    }
  };

  const handleLlamadaTerminada = () => {
    setProgress(100);
    setFase(2);
    if (audioTonoRef.current) {
      audioTonoRef.current.volume = 0.6;
      audioTonoRef.current.play().catch(() => console.log("Audio 2 bloqueado"));
    }
  };

  useEffect(() => {
    if (fase !== 1) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 4;
        if (next >= 99) {
          clearInterval(interval);
          return 99;
        }
        return next;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [fase]);

  return (
    <div className="flex flex-col xl:flex-row h-full w-full gap-6 relative z-10 min-h-[500px]">
      <audio ref={audioLlamadaRef} src="/llamada.mp3" onEnded={handleLlamadaTerminada} />
      <audio ref={audioTonoRef} src="/tono.mp3" />
      <div className="flex-1 border border-green-500 p-8 rounded bg-black/80 shadow-[0_0_15px_rgba(0,255,65,0.2)] flex flex-col relative h-full">
        {fase === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <button onClick={iniciarSecuencia} className="text-green-500 border border-green-500 px-8 py-4 rounded font-bold text-xl hover:bg-green-500 hover:text-black transition-all hover:shadow-[0_0_20px_#00FF41] animate-pulse cursor-pointer">
              &gt; INICIAR CONEXIÓN_
            </button>
          </div>
        ) : (
          <div className="space-y-6 flex flex-col h-full w-full">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 flex items-center gap-2 text-green-500">
              &gt; INICIALIZANDO SISTEMA<span className="animate-pulse font-black text-white">...</span>
            </h2>
            <div className="space-y-2 font-mono text-sm text-green-600">
              <p>CARGANDO INTERFAZ<span className="animate-pulse text-white">...</span></p>
              <p>ENLAZANDO MATRIX FRONTEND<span className="animate-pulse text-white">...</span></p>
            </div>
            <div className="space-y-2 mt-8">
              <div className="flex justify-between text-xs text-green-600 font-mono">
                <span>REGISTROS DE PERSONAL: PROCESANDO</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-4 border border-green-900 bg-black rounded overflow-hidden p-0.5">
                <div className="h-full bg-green-500 shadow-[0_0_10px_#00FF41] transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            <div className="mt-12 font-mono flex-1 flex flex-col justify-center">
              {fase === 2 ? (
                <p className="text-green-500 font-bold text-2xl lg:text-3xl drop-shadow-[0_0_8px_#00FF41]">
                  &gt; ACCESO CONCEDIDO:<br/>BIENVENIDO OPERADOR.
                </p>
              ) : (
                <p className="text-green-600 animate-pulse mt-12 text-lg">
                  &gt; DESENCRIPTANDO CÓDIGO FUENTE<span className="animate-pulse text-white">...</span>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      {fase === 2 && (
        <div className="w-full xl:w-1/2 border border-green-500 p-6 rounded bg-black/80 shadow-[0_0_15px_rgba(0,255,65,0.2)] flex flex-col animate-[fadeIn_1s_ease-out]">
          <h2 className="text-2xl font-bold mb-4 text-green-500">
            &gt; FICHEROS DE LA TRIPULACIÓN<span className="animate-pulse text-white">...</span>
          </h2>
          <div className="space-y-1 mb-6 text-xs text-green-600 font-mono border-b border-green-900 pb-4">
            <p>&gt; OBTENIENDO PERFILES<span className="animate-pulse text-white">...</span> OK</p>
            <p>&gt; CARGANDO BIOGRAFÍAS<span className="animate-pulse text-white">...</span> OK</p>
            <p>&gt; FICHEROS DE PERFILES<span className="animate-pulse text-white">...</span> OK</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto pr-2 flex-1 max-h-[400px]">
            {tripulantes.map((t) => (
              <Link to={`/integrantes/${t.id}`} key={t.id} className="border border-green-900 p-3 rounded flex gap-4 hover:border-green-500 transition-colors bg-black/40 group relative overflow-hidden cursor-pointer hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] no-underline">
                <div className="w-16 h-16 shrink-0 border border-green-900 group-hover:border-green-500 rounded bg-black p-1 transition-colors relative z-10">
                  <img src={t.avatar} alt={t.nombre} className="w-full h-full object-cover rounded" />
                </div>
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="flex justify-between items-start">
                    <h3 className="text-green-500 font-bold text-lg leading-none mb-1 group-hover:text-white transition-colors">{t.nombre}</h3>
                    <span className="text-green-500 text-xs opacity-60 group-hover:animate-spin">✶</span>
                  </div>
                  <p className="text-green-700 text-xs mb-2 tracking-widest">{t.rol.toUpperCase()}</p>
                  <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{t.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Tripulacion() {
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

  const tripulantesImgs = [
    { ...tripulantes[0], img: '/trip-martin.jpg' },
    { ...tripulantes[1], img: '/trip-rodrigo.jpg' },
    { ...tripulantes[2], img: '/trip-facundo.jpg' },
    { ...tripulantes[3], img: '/trip-florencia.jpg' },
  ];

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
          {tripulantesImgs.map((trip) => (
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

function PerfilTripulante() {
  const { id } = useParams();
  const tripulante = tripulantes.find(t => t.id === parseInt(id));

  if (!tripulante) {
    return <h2 className="text-2xl text-green-500">&gt; TRIPULANTE NO ENCONTRADO_</h2>;
  }

  switch (tripulante.id) {
    case 1:
      return <PerfilMartin tripulante={tripulante} />;
    case 2:
      return <PerfilRodrigo tripulante={tripulante} />;
    case 3:
      return <PerfilFacundo tripulante={tripulante} />;
    case 4:
      return <PerfilFlorencia tripulante={tripulante} />;
    default:
      return <h2 className="text-2xl text-green-500">&gt; ERROR: PERFIL NO IMPLEMENTADO_</h2>;
  }
}

function ArchivosJSON() {
  const [busqueda, setBusqueda] = useState('');
  const [vistaActiva, setVistaActiva] = useState('tabla');

  const resultados = useMemo(() => {
    const q = busqueda.toLowerCase().trim();
    if (!q) return datosTripulantes;
    return datosTripulantes.filter(t => t.nombre.toLowerCase().includes(q) || t.rol.toLowerCase().includes(q));
  }, [busqueda]);

  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="border border-green-500 bg-black/80 p-6 rounded shadow-[0_0_15px_rgba(0,255,65,0.2)]">
        <h2 className="text-3xl font-bold text-green-500 mb-1">&gt; ARCHIVOS JSON</h2>
        <p className="text-green-700 text-sm">Explorador de base de datos.</p>
      </div>
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700" />
          <input type="text" value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="&gt; Buscar..." className="w-full bg-black border border-green-900 rounded px-10 py-2.5 text-green-500 focus:border-green-500" />
        </div>
        <div className="flex border border-green-900 rounded shrink-0">
          <button onClick={() => setVistaActiva('tabla')} className={`px-4 font-bold text-xs ${vistaActiva === 'tabla' ? 'bg-green-500 text-black' : 'text-green-700 hover:text-green-500'}`}>TABLA</button>
          <button onClick={() => setVistaActiva('json')} className={`px-4 border-l border-green-900 font-bold text-xs ${vistaActiva === 'json' ? 'bg-green-500 text-black' : 'text-green-700 hover:text-green-500'}`}>JSON</button>
        </div>
      </div>
      {vistaActiva === 'tabla' ? (
        <div className="overflow-x-auto rounded border border-green-900">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-green-900 bg-black/90 text-green-700 uppercase">
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Rol</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map(t => (
                <tr key={t.id} className="border-b border-green-900/60 hover:bg-green-900/30">
                  <td className="px-4 py-3 text-white font-bold">{t.nombre}</td>
                  <td className="px-4 py-3 text-gray-300">{t.rol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <pre className="bg-black/90 border border-green-900 p-6 rounded overflow-auto text-xs text-green-500 leading-relaxed max-h-[60vh]">
          {JSON.stringify(resultados, null, 2)}
        </pre>
      )}
    </div>
  );
}

const POSTS_POR_PAGINA = 5;
function RedExterna() {
  const [posts, setPosts] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Conexión rechazada');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError("Error de conexión: Enlace con la Red Externa interrumpido por los Centinelas.");
      } finally {
        setLoading(false);
      }
    };
    fetchDatos();
  }, []);

  const totalPaginas = Math.ceil(posts.length / POSTS_POR_PAGINA);
  const inicio = (paginaActual - 1) * POSTS_POR_PAGINA;
  const postsPagina = posts.slice(inicio, inicio + POSTS_POR_PAGINA);

  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="border border-green-500 bg-black/80 p-6 rounded shadow-[0_0_15px_rgba(0,255,65,0.2)]">
        <h2 className="text-3xl font-bold text-green-500 mb-1">&gt; RED EXTERNA</h2>
      </div>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center p-12 border border-green-900 border-dashed rounded bg-black/50">
          <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-green-500 font-mono animate-pulse">&gt; Accediendo a la matriz. Cargando datos de la Red Externa (Zion)...</p>
        </div>
      ) : error ? (
        <div className="border-2 border-red-500 bg-red-900/20 p-6 rounded text-center animate-pulse shadow-[0_0_20px_rgba(255,0,0,0.4)]">
          <h3 className="text-red-500 font-bold text-xl mb-2">⚠️ ALERTA CRÍTICA</h3>
          <p className="text-red-400 font-mono">{error}</p>
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            {postsPagina.map(post => (
              <div key={post.id} className="border-l-4 border-green-500 bg-black/70 p-5 rounded hover:bg-black/90 transition-colors">
                <h3 className="text-green-500 text-lg font-bold capitalize">{post.title}</h3>
                <p className="text-gray-400 text-sm">{post.body}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <button onClick={() => setPaginaActual(p => Math.max(1, p - 1))} disabled={paginaActual === 1} className="border border-green-500 text-green-500 px-4 py-2 text-sm rounded font-bold disabled:opacity-30 hover:bg-green-500 hover:text-black transition-all">
              &lt; PREV
            </button>
            <span className="text-green-500 font-mono font-bold text-sm">PÁGINA {paginaActual} DE {totalPaginas || 1}</span>
            <button onClick={() => setPaginaActual(p => Math.min(totalPaginas, p + 1))} disabled={paginaActual >= totalPaginas} className="border border-green-500 text-green-500 px-4 py-2 text-sm rounded font-bold disabled:opacity-30 hover:bg-green-500 hover:text-black transition-all">
              NEXT &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
}