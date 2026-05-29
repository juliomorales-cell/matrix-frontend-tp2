import Bitacora from "./pages/Bitacora";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatrixRain from "./components/MatrixRain";
import GaleriaMatrix from "./pages/GaleriaMatrix";
import ArbolRender from "./pages/ArbolRender";
import PortadaHome from "./pages/PortadaHome";
import RedExterna from "./pages/RedExterna";
import Tripulantes from "./pages/Tripulantes";
import Tripulante from "./pages/Tripulante";
import ArchivosJSON from "./pages/ArchivosJSON";
import Sidebar from "./components/Sidebar/Sidebar";

const tripulantes = [
  {
    id: 1,
    img: "/martinperfil.jpeg",
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
    img: "/rodrigo.jpg",
    nombre: "RODRIGO",
    rol: "ESTUDIANTE Y DESARROLLADOR",
    genero: "hombre",
    avatar: "rodrigo.jpg",
    github: "https://github.com/RodrigoZocco",
    ubicacion: "Argentina",
    edad: "27",
    bio: "Soy una persona apasionada por la programación, me parece increible como internet acorta las distancias: datos viajando a una velocidad increible para informarnos del tema que busquemos en cuestion de segundos. Además practique Basket durante 18 años, deporte que me enseño a trabajar en equipo y generar un buen ambiente laboral, algo que aplico día a día, además de tratar de mejorar progresivamente.",
    habilidades: ["JavaScript", "TypeScript", "SQL", "NoSQL", "Docker", "UML"],
    peliculas: [
      {
        titulo: "Peaky Blinders",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3UC7BnaeJ3Y5_qfSp1mHNconxITmfu_A5A&s",
      },
      {
        titulo: "Batman: El Caballero",
        poster:
          "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        titulo: "Interstellar",
        poster:
          "https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF894,1000_QL80_.jpg",
      },
    ],
    discos: [
      {
        titulo: "Mejor que el silencio",
        artista: "Nach Scratch",
        cover:
          "https://i.discogs.com/kmxhsisl5Pi_zt7lHRITX7__1kRxVaKfAMTmMC8O0fo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2MDQ3/MTMtMTM1MTU5OTcz/Ny0yMjY5LmpwZWc.jpeg",
      },
      {
        titulo: "Hybrid Theory",
        artista: "Linkin Park",
        cover:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlfNs5F8TncDdcUTd3Jm6bXCn0w8pTLtblw&s",
      },
      {
        titulo: "Suena la Alarma",
        artista: "Los Cafres",
        cover:
          "https://i.scdn.co/image/ab67616d0000b27346a888765544d2f977c5dc21",
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

        <Sidebar />

        <main className="flex-1 overflow-y-auto p-6 z-10 relative min-w-0">
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
