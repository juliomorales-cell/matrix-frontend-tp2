import { useState, useEffect } from "react";

export default function RedExterna() {
  const POSTS_POR_PAGINA = 5;

  const [posts, setPosts] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const totalPaginas = Math.ceil(posts.length / POSTS_POR_PAGINA);
  const inicio = (paginaActual - 1) * POSTS_POR_PAGINA;
  const postsPagina = posts.slice(inicio, inicio + POSTS_POR_PAGINA);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("Conexión rechazada");
        const data = await response.json();
        setPosts(data);
      } catch {
        setError(
          "Error de conexión: Enlace con la Red Externa interrumpido por los Centinelas."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchDatos();
  }, []);

  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="border border-green-500 bg-black/80 p-6 rounded shadow-[0_0_15px_rgba(0,255,65,0.2)]">
        <h2 className="text-3xl font-bold text-green-500 mb-1">
          &gt; RED EXTERNA
        </h2>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center p-12 border border-green-900 border-dashed rounded bg-black/50">
          <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-green-500 font-mono animate-pulse">
            &gt; Accediendo a la matriz. Cargando datos de la Red Externa
            (Zion)...
          </p>
        </div>
      ) : error ? (
        <div className="border-2 border-red-500 bg-red-900/20 p-6 rounded text-center animate-pulse shadow-[0_0_20px_rgba(255,0,0,0.4)]">
          <h3 className="text-red-500 font-bold text-xl mb-2">
            ⚠️ ALERTA CRÍTICA
          </h3>
          <p className="text-red-400 font-mono">{error}</p>
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            {postsPagina.map((post) => (
              <div
                key={post.id}
                className="border-l-4 border-green-500 bg-black/70 p-5 rounded hover:bg-black/90 transition-colors"
              >
                <h3 className="text-green-500 text-lg font-bold capitalize">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm">{post.body}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={() => setPaginaActual((p) => Math.max(1, p - 1))}
              disabled={paginaActual === 1}
              className="border border-green-500 text-green-500 px-4 py-2 text-sm rounded font-bold disabled:opacity-30 hover:bg-green-500 hover:text-black transition-all"
            >
              &lt; PREV
            </button>
            <span className="text-green-500 font-mono font-bold text-sm">
              PÁGINA {paginaActual} DE {totalPaginas || 1}
            </span>
            <button
              onClick={() =>
                setPaginaActual((p) => Math.min(totalPaginas, p + 1))
              }
              disabled={paginaActual >= totalPaginas}
              className="border border-green-500 text-green-500 px-4 py-2 text-sm rounded font-bold disabled:opacity-30 hover:bg-green-500 hover:text-black transition-all"
            >
              NEXT &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
}
