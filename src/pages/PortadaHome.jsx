import { useState, useEffect, useRef } from 'react'
import SEO from '../components/SEO'
import TeamGrid from '../components/TeamGrid'

// NOTA: Solo usa de cada tripulante: id, avatar, nombre, rol, bio
const PortadaHome = ({ tripulantes }) => {
	const [fase, setFase] = useState(0)
	const [progress, setProgress] = useState(0)
	const audioLlamadaRef = useRef(null)
	const audioTonoRef = useRef(null)

	const iniciarSecuencia = () => {
		setFase(1)
		if (audioLlamadaRef.current) {
			audioLlamadaRef.current.volume = 0.5
			audioLlamadaRef.current
				.play()
				.catch(() => console.log('Audio 1 bloqueado'))
		}
	}

	const handleLlamadaTerminada = () => {
		setProgress(100)
		setFase(2)
		if (audioTonoRef.current) {
			audioTonoRef.current.volume = 0.6
			audioTonoRef.current
				.play()
				.catch(() => console.log('Audio 2 bloqueado'))
		}
	}

	useEffect(() => {
		if (fase !== 1) return
		const interval = setInterval(() => {
			setProgress((prev) => {
				const next = prev + Math.floor(Math.random() * 12) + 4
				if (next >= 99) {
					clearInterval(interval)
					return 99
				}
				return next
			})
		}, 300)
		return () => clearInterval(interval)
	}, [fase])

	return (
		<>
			<SEO
				title="The System Group 1"
				description="Trabajo práctico grupal utilizando REACT"
			/>
			<div className="flex flex-col xl:flex-row h-full w-full gap-6 relative z-10 min-h-[500px]">
				<audio
					ref={audioLlamadaRef}
					src="/llamada.mp3"
					onEnded={handleLlamadaTerminada}
				/>
				<audio ref={audioTonoRef} src="/tono.mp3" />
				<div className="flex-1 border border-green-500 p-8 rounded bg-black/80 shadow-[0_0_15px_rgba(0,255,65,0.2)] flex flex-col relative h-full">
					{fase === 0 ? (
						<div className="absolute inset-0 flex items-center justify-center">
							<button
								onClick={iniciarSecuencia}
								className="text-green-500 border border-green-500 px-8 py-4 rounded font-bold text-xl hover:bg-green-500 hover:text-black transition-all hover:shadow-[0_0_20px_#00FF41] animate-pulse cursor-pointer"
							>
								&gt; INICIAR CONEXIÓN_
							</button>
						</div>
					) : (
						<div className="space-y-6 flex flex-col h-full w-full break-all">
							<h2 className="text-2xl lg:text-3xl font-bold mb-2 flex items-center gap-2 text-green-500">
								&gt; INICIALIZANDO SISTEMA
							</h2>
							<div className="space-y-2 font-mono text-sm text-green-600">
								<p>
									CARGANDO INTERFAZ
								</p>
								<p>
									ENLAZANDO MATRIX FRONTEND
								</p>
							</div>
							<div className="space-y-2 mt-8">
								<div className="flex justify-between text-xs text-green-600 font-mono">
									<span>
										REGISTROS DE PERSONAL: PROCESANDO
									</span>
									<span>{progress}%</span>
								</div>
								<div className="w-full h-4 border border-green-900 bg-black rounded overflow-hidden p-0.5">
									<div
										className="h-full bg-green-500 shadow-[0_0_10px_#00FF41] transition-all duration-300 ease-out"
										style={{ width: `${progress}%` }}
									></div>
								</div>
							</div>
							<div className="mt-12 font-mono flex-1 flex flex-col justify-center">
								{fase === 2 ? (
									<p className="text-green-500 font-bold text-2xl lg:text-3xl drop-shadow-[0_0_8px_#00FF41]">
										&gt; ACCESO CONCEDIDO:
										<br />
										BIENVENIDO OPERADOR.
									</p>
								) : (
									<p className="text-green-600 animate-pulse mt-12 text-lg">
										&gt; DESENCRIPTANDO CÓDIGO FUENTE
									</p>
								)}
							</div>
						</div>
					)}
				</div>
				{fase === 2 && (
					<div className="w-full xl:w-1/2 border border-green-500 p-6 rounded bg-black/80 shadow-[0_0_15px_rgba(0,255,65,0.2)] flex flex-col animate-[fadeIn_1s_ease-out]">
						<h2 className="text-2xl font-bold mb-4 text-green-500">
							&gt; FICHEROS DE LA TRIPULACIÓN
						</h2>
						<div className="space-y-1 mb-6 text-xs text-green-600 font-mono border-b border-green-900 pb-4">
							<p>
								&gt; OBTENIENDO PERFILES
								<span className="animate-pulse text-white">
									...
								</span>{' '}
								OK
							</p>
							<p>
								&gt; CARGANDO BIOGRAFÍAS
								<span className="animate-pulse text-white">
									...
								</span>{' '}
								OK
							</p>
							<p>
								&gt; FICHEROS DE PERFILES
								<span className="animate-pulse text-white">
									...
								</span>{' '}
								OK
							</p>
						</div>

						<TeamGrid members={tripulantes} />
					</div>
				)}
			</div>
		</>
	)
}

export default PortadaHome
