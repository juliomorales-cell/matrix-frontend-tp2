import { useState, useRef, useEffect } from "react";

const ahora = Date.now();

export default function Bitacora() {
  const [entradas, setEntradas] = useState([
    {
      id: 1,
      texto:
        "> ASIGNACIÓN DE ROLES Y METODOLOGÍA: Se ha establecido el uso de Trello para la gestión del proyecto mediante tableros Kanban. El flujo de trabajo coordinado se basa en GitFlow, utilizando ramas 'feature' para nuevas funcionalidades, 'develop' para integración constante y 'main' para despliegues estables.",
      fecha: new Date(ahora - 86400000 * 2).toLocaleString(), // Hace 2 días
    },
    {
      id: 2,
      texto:
        "> JUSTIFICACIÓN DE MIGRACIÓN A REACT: La estructura inicial basada en HTML y JS Vanilla ha sido reemplazada. La migración a React permite aprovechar una arquitectura de componentes reutilizables, un manejo de estados dinámicos eficiente y el Virtual DOM, lo que optimiza drásticamente el rendimiento del sistema de Zion.",
      fecha: new Date(ahora - 86400000).toLocaleString(), // Hace 1 día
    },
    {
      id: 3,
      texto:
        "> INICIALIZACIÓN DEL SISTEMA: Enlaces neuronales estables. Conexión con la base de datos de la tripulación establecida con éxito. Sistema listo.",
      fecha: new Date().toLocaleString(), // Hoy
    },
  ]);
  const [nuevaEntrada, setNuevaEntrada] = useState("");
  const [step, setStep] = useState(0);
  const [muted, setMuted] = useState(false);

  const audioNeoRef = useRef(null);
  const audioWakeRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // 🎯 Iniciar secuencia al hacer clic
  const iniciarSecuencia = () => {
    // 1. Reproducir neo-hablando.mp4
    if (audioNeoRef.current) {
      audioNeoRef.current.volume = muted ? 0 : 0.5;
      audioNeoRef.current
        .play()
        .catch(() => console.log("Audio neo-hablando bloqueado"));
    }
    // 2. Mostrar SYSTEM FAILURE
    setStep(1);

    // 3. ⏱️ La pantalla de falla dura 7 segundos exactos
    timeoutRef.current = setTimeout(() => {
      setStep(2); // Aparece la Bitácora
      timeoutRef.current = null;
    }, 10000);
  };

  // 🎵 Cuando termina neo-hablando.mp4 (puede ser antes de los 7 segundos)
  const handleNeoEnded = () => {
    // Iniciar wake-up con volumen 0 y hacer fade-in
    if (audioWakeRef.current) {
      audioWakeRef.current.loop = true;
      audioWakeRef.current.volume = 0;
      audioWakeRef.current
        .play()
        .catch(() => console.log("Audio wake-up bloqueado"));

      // Si no está muteado, iniciar el fade-in
      if (!muted) {
        startWakeUpFadeIn();
      }
    }
  };

  // 🎚️ Función para hacer el fade-in de wake-up
  const startWakeUpFadeIn = () => {
    // Limpiar intervalo previo
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }

    const targetVolume = 0.6;
    const step = 0.02;
    const intervalTime = 100; // ms

    fadeIntervalRef.current = setInterval(() => {
      if (audioWakeRef.current) {
        const newVolume = Math.min(
          audioWakeRef.current.volume + step,
          targetVolume
        );
        audioWakeRef.current.volume = newVolume;

        if (newVolume >= targetVolume) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
      }
    }, intervalTime);
  };

  // 🔇 Control de mute
  useEffect(() => {
    if (audioNeoRef.current) {
      audioNeoRef.current.volume = muted ? 0 : 0.5;
    }
    if (audioWakeRef.current) {
      if (muted) {
        // Detener fade-in si está en curso
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
        audioWakeRef.current.volume = 0;
      } else {
        // Si no está muteado y el audio está reproduciendo, poner volumen objetivo
        if (!audioWakeRef.current.paused) {
          audioWakeRef.current.volume = 0.6;
        }
      }
    }
  }, [muted]);

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  // 🖊️ Lógica de la bitácora (sin cambios)
  const agregarEntrada = (e) => {
    e.preventDefault();
    if (!nuevaEntrada.trim()) return;
    const nuevoLog = {
      id: Date.now(),
      texto: nuevaEntrada,
      fecha: new Date().toLocaleString(),
    };
    setEntradas([nuevoLog, ...entradas]);
    setNuevaEntrada("");
  };

  const borrarEntrada = (id) => {
    setEntradas(entradas.filter((e) => e.id !== id));
  };

  // Limpiar timeouts e intervalos al desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, []);

  return (
    <div
      className="w-full h-full min-h-[600px] flex flex-col relative overflow-hidden bg-black/80 border border-green-900/40 select-none text-green-500"
      onClick={() => {
        if (step === 0) iniciarSecuencia();
      }}
    >

      {/* 🎵 REPRODUCTORES DE AUDIO */}
      <audio
        ref={audioNeoRef}
        src="/neo-hablando.mp4"
        onEnded={handleNeoEnded}
      />
      <audio ref={audioWakeRef} src="/wake-up.mp4" loop={true} />

      {/* FASE 0: LLUVIA EN MOVIMIENTO */}
      {step === 0 && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-transparent cursor-pointer">
          <div className="bg-black/90 px-6 py-4 border border-green-500 animate-pulse shadow-[0_0_20px_rgba(0,255,65,0.5)] font-mono text-center rounded">
            <p className="text-lg md:text-xl font-bold tracking-widest text-[#00FF41]">
              &gt; AWAITING OPERATOR INPUT_
            </p>
          </div>
        </div>
      )}

      {/* FASE 1: SYSTEM FAILURE (TEXTO VERDE MATRIX - 7 SEGUNDOS) */}
      {step === 1 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 9999,
            pointerEvents: "none",
            padding: "1rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              animation: "glitchPulse 0.8s infinite ease-in-out",
              width: "100%",
              maxWidth: "90vw",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(1.2rem, 6vw, 5rem)",
                fontWeight: 900,
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#00FF41",
                backgroundColor: "black",
                padding: "0.75rem 1.25rem",
                border: "4px solid #00FF41",
                borderRadius: "0.5rem",
                boxShadow: "0 0 50px rgba(0,255,65,0.8)",
                margin: 0,
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              SYSTEM FAILURE
            </h1>
          </div>
        </div>
      )}

      {/* FASE 2: BITÁCORA COMPLETA */}
      {step === 2 && (
        <div
          className="flex flex-col gap-6 pb-10 p-6 relative z-40 w-full h-full overflow-y-auto cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          {/* CABECERA CON BOTÓN DE MUTE */}
          <div className="border border-green-500 bg-black/80 p-6 rounded shadow-[0_0_15px_rgba(0,255,65,0.2)] flex justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-1 font-mono">
                &gt; BITÁCORA DE EVENTOS
              </h2>
              <p className="text-green-700 text-sm font-mono">
                Registro manual de anomalías y sucesos en el sistema.
              </p>
            </div>
            <button
              onClick={toggleMute}
              className="border border-green-500 p-3 rounded hover:bg-green-500 hover:text-black transition-colors text-2xl"
            >
              {muted ? "🔇" : "🔊"}
            </button>
          </div>

          <form
            onSubmit={agregarEntrada}
            className="flex flex-col md:flex-row gap-3"
          >
            <input
              type="text"
              value={nuevaEntrada}
              onChange={(e) => setNuevaEntrada(e.target.value)}
              placeholder="&gt; Registrar nuevo evento en la bitácora..."
              className="flex-1 bg-black border border-green-900 rounded px-4 py-3 text-green-500 focus:outline-none focus:border-green-500 font-mono placeholder:text-green-900 placeholder:opacity-40"
            />
            <button
              type="submit"
              className="border border-green-500 text-green-500 px-8 py-3 rounded hover:bg-green-500 hover:text-black transition-colors font-bold cursor-pointer uppercase tracking-wider text-sm font-mono shadow-[0_0_10px_rgba(0,255,65,0.2)]"
            >
              REGISTRAR
            </button>
          </form>

          <div className="space-y-3 overflow-y-auto max-h-[350px] pr-2">
            {entradas.length === 0 && (
              <div className="text-green-700 text-center py-12 border border-green-900 border-dashed rounded font-mono bg-black/30">
                &gt; NO HAY REGISTROS EN LA BITÁCORA DE ENTRADA.
              </div>
            )}
            {entradas.map((entry) => (
              <div
                key={entry.id}
                className="border-l-4 border-green-500 bg-black/70 p-4 rounded flex justify-between items-start gap-4 border border-green-900/30"
              >
                <div className="flex-1 font-mono">
                  <p className="text-white text-sm leading-relaxed">
                    {entry.texto}
                  </p>
                  <p className="text-xs text-green-700 mt-1.5 flex items-center gap-1.5">
                    <span>✶</span> {entry.fecha}
                  </p>
                </div>
                <button
                  onClick={() => borrarEntrada(entry.id)}
                  className="text-green-700 hover:text-red-500 transition-colors font-bold text-xs cursor-pointer px-1 py-0.5"
                >
                  [BORRAR]
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes glitchPulse {
          0% { opacity: 1; transform: scale(1); text-shadow: 0 0 0 #00FF41; }
          50% { opacity: 0.7; transform: scale(1.02); text-shadow: 0 0 15px #00FF41, 0 0 30px #007F20; }
          100% { opacity: 1; transform: scale(1); text-shadow: 0 0 0 #00FF41; }
        }
      `}</style>
    </div>
  );
}
