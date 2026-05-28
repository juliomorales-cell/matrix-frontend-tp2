import Bitacora from "./pages/Bitacora";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Terminal,
  Users,
  Database,
  Globe,
  Image as ImageIcon,
  BookOpen,
  Network,
} from "lucide-react";
import MatrixRain from "./components/MatrixRain";
import GaleriaMatrix from "./pages/GaleriaMatrix";
import ArbolRender from "./pages/ArbolRender";
import PortadaHome from "./pages/PortadaHome";
import RedExterna from "./pages/RedExterna";
import Tripulantes from "./pages/Tripulantes";
import Tripulante from "./pages/Tripulante";
import ArchivosJSON from "./pages/ArchivosJSON";

const tripulantes = [
  {
    id: 1,
    img: "/trip-martin.jpg",
    nombre: "MARTÍN",
    rol: "ZION OPERATOR",
    genero: "hombre",
    avatar:
      "https://api.dicebear.com/7.x/bottts/svg?seed=Martin&baseColor=000000&primaryColor=00FF41",
    github: "https://github.com/usuario-martin",
    ubicacion: "CABA",
    edad: "47",
    bio: "Operador veterano del Nebuchadnezzar. Domina cada protocolo del sistema y mantiene los enlaces neuronales activos durante las inmersiones más peligrosas. Cuando no vigila la Matrix, sus frecuencias sonoras favoritas lo mantienen en sintonía con Zion.",
    habilidades: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Python"],
    peliculas: [
      {
        titulo: "Interstellar",
        poster:
          "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIE.jpg",
      },
      {
        titulo: "Volver al Futuro",
        poster:
          "https://image.tmdb.org/t/p/w342/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
      },
      {
        titulo: "Matrix",
        poster:
          "https://image.tmdb.org/t/p/w342/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      },
      {
        titulo: "Esperando la Carroza",
        poster:
          "https://image.tmdb.org/t/p/w342/5a8vfBTuJvNQnEH9AqG1xFOblMy.jpg",
      },
    ],
    discos: [
      {
        titulo: "Tengo que parar",
        artista: "Miguel Mateos",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/a/ae/Giros_F_Paez.jpg",
      },
      {
        titulo: "Giros",
        artista: "Fito Páez",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/a/ae/Giros_F_Paez.jpg",
      },
      {
        titulo: "The Black Album",
        artista: "Metallica",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/5/51/Metallica_-_Metallica.jpg",
      },
      {
        titulo: "Appetite for Destruction",
        artista: "Guns N' Roses",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg",
      },
    ],
    nivel: "OPERATOR",
    coverImage: "/matrix_operator.png",
    secreto: '🎵 Disco secreto: "Sueño Stereo" — Soda Stereo',
  },
  {
    id: 2,
    img: "/trip-rodrigo.jpg",
    nombre: "RODRIGO",
    rol: "ZION REBEL",
    genero: "hombre",
    avatar:
      "https://api.dicebear.com/7.x/bottts/svg?seed=Rodrigo&baseColor=000000&primaryColor=00FF41",
    github: "https://github.com/RodrigoZocco",
    ubicacion: "Argentina",
    edad: "27",
    bio: "Rebelde de Zion con un talento especial para los sistemas de datos y la arquitectura de red. Su pasión por el basket es tan intensa como su obsesión por optimizar consultas SQL. Detecta anomalías en la Matrix antes que nadie.",
    habilidades: ["JavaScript", "TypeScript", "SQL", "NoSQL", "Docker", "UML"],
    peliculas: [
      {
        titulo: "Peaky Blinders",
        poster:
          "https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkPaQca.jpg",
      },
      {
        titulo: "Batman: El Caballero",
        poster:
          "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        titulo: "Interstellar",
        poster:
          "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIE.jpg",
      },
    ],
    discos: [
      {
        titulo: "Mejor que el silencio",
        artista: "Nach Scratch",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/5/51/Metallica_-_Metallica.jpg",
      },
      {
        titulo: "Hybrid Theory",
        artista: "Linkin Park",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/9/9a/Hybrid_theory_album_cover.jpg",
      },
      {
        titulo: "Suena la Alarma",
        artista: "Los Cafres",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/9/9a/Hybrid_theory_album_cover.jpg",
      },
    ],
    nivel: "CREW MEMBER",
    coverImage: "https://media.giphy.com/media/sULKEgDMX8LcI/giphy.gif",
    secreto: "🏀 Dato secreto: ¡fanático del basket! Clickea la pelota...",
  },
  {
    id: 3,
    img: "/trip-facundo.jpg",
    nombre: "FACUNDO",
    rol: "SYSTEM ARCHITECT",
    genero: "hombre",
    avatar:
      "https://api.dicebear.com/7.x/bottts/svg?seed=Facundo&baseColor=000000&primaryColor=00FF41",
    github: "https://github.com/usuario-facundo",
    ubicacion: "Entre Ríos",
    edad: "42",
    bio: "Arquitecto de sistemas con visión holística de la realidad digital. Construye los puentes entre el mundo simulado y la verdad. Su manejo del código es tan preciso como una espada de luz en la oscuridad de la Matrix.",
    habilidades: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "React"],
    peliculas: [
      {
        titulo: "The Lord of the Rings",
        poster:
          "https://image.tmdb.org/t/p/w342/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      },
      {
        titulo: "The Matrix",
        poster:
          "https://image.tmdb.org/t/p/w342/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      },
      {
        titulo: "Schindler's List",
        poster:
          "https://image.tmdb.org/t/p/w342/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      },
    ],
    discos: [
      {
        titulo: "The Dark Side of the Moon",
        artista: "Pink Floyd",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
      },
      {
        titulo: "Led Zeppelin IV",
        artista: "Led Zeppelin",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg",
      },
      {
        titulo: "Nevermind",
        artista: "Nirvana",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
      },
    ],
    nivel: "CAPTAIN",
    coverImage: "https://media.giphy.com/media/G6sJqVpD1U4jC/giphy.gif",
    secreto: "🎉 ¡Hay un secreto oculto esperando ser descubierto!",
  },
  {
    id: 4,
    img: "/trip-florencia.jpg",
    nombre: "FLORENCIA",
    rol: "SIGNAL OPERATOR",
    genero: "mujer",
    avatar:
      "https://api.dicebear.com/7.x/bottts/svg?seed=Florencia&baseColor=000000&primaryColor=00FF41",
    github: "https://github.com/usuario-florencia",
    ubicacion: "González Catán",
    edad: "29",
    bio: "Operadora de señales con un talento único para diseñar las interfaces que conectan a los liberados con Zion. Su sensibilidad artística convierte el código en experiencias visuales que trascienden la simulación. La música de Cerati es su código fuente.",
    habilidades: ["HTML", "CSS", "JavaScript", "Canva"],
    peliculas: [
      {
        titulo: "Harry Potter",
        poster:
          "https://image.tmdb.org/t/p/w342/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      },
      {
        titulo: "El Señor de los Anillos",
        poster:
          "https://image.tmdb.org/t/p/w342/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      },
      {
        titulo: "Soy Leyenda",
        poster:
          "https://image.tmdb.org/t/p/w342/e6APHKVKkXeEKvqMnGDX39vJFR4.jpg",
      },
    ],
    discos: [
      {
        titulo: "Amor Amarillo",
        artista: "Gustavo Cerati",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
      },
      {
        titulo: "Dynamo",
        artista: "Soda Stereo",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
      },
      {
        titulo: "A Head Full of Dreams",
        artista: "Coldplay",
        cover:
          "https://upload.wikimedia.org/wikipedia/en/9/9a/Hybrid_theory_album_cover.jpg",
      },
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
              THE SYSTEM
              <br />
              GROUP 1
            </h1>
          </div>

          <ul className="flex-1 p-6 space-y-4 overflow-y-auto">
            <NavItem to="/" icon={<Terminal size={24} />} text=">_Inicio" />
            <NavItem
              to="/integrantes"
              icon={<Users size={24} />}
              text="Tripulacion"
            />
            <NavItem
              to="/datos"
              icon={<Database size={24} />}
              text="Archivos JSON"
            />
            <NavItem to="/api" icon={<Globe size={24} />} text="Red Externa" />
            <NavItem
              to="/galeria"
              icon={<ImageIcon size={24} />}
              text="Galería"
            />
            <NavItem
              to="/bitacora"
              icon={<BookOpen size={24} />}
              text="Bitácora"
            />
            <NavItem
              to="/arbol"
              icon={<Network size={24} />}
              text="Árbol Render"
            />
          </ul>

          <div className="p-4 border-t-2 border-green-900 text-xs text-center text-green-800">
            V 2.0.26 - THE SYSTEM GROUP 1
          </div>
        </nav>

        <main className="flex-1 overflow-y-auto p-8 z-10 relative">
          <Routes>
            <Route
              path="/"
              element={<PortadaHome tripulantes={tripulantes} />}
            />
            <Route
              path="/integrantes"
              element={<Tripulantes tripulantes={tripulantes} />}
            />
            <Route
              path="/integrantes/:id"
              element={<Tripulante tripulantes={tripulantes} />}
            />
            <Route path="/datos" element={<ArchivosJSON />} />
            <Route path="/api" element={<RedExterna />} />
            <Route path="/galeria" element={<GaleriaMatrix />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/arbol" element={<ArbolRender />} />
            <Route
              path="*"
              element={
                <h2 className="text-2xl text-green-500">
                  &gt; ERROR 404: SECCIÓN NO ENCONTRADA_
                </h2>
              }
            />
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
