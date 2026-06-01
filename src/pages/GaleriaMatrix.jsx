import { useState, useEffect, useRef } from 'react'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import imagenesMatrix from '../data/imagenes-matrix.json'

const GaleriaMatrix = () => {
	const [selectedIndex, setSelectedIndex] = useState(null)
	const [isZoomed, setIsZoomed] = useState(false)
	const [audioPlaying, setAudioPlaying] = useState(false)
	const audioRef = useRef(null)

	useEffect(() => {
		const audio = audioRef.current

		if (!audio) return

		if (!audioPlaying) {
			audio.pause()
			return
		}

		audio.play().catch((err) => {
			if (err.name !== 'AbortError') {
				console.log(
					'El navegador pide interacción previa para iniciar el sonido:',
					err,
				)
			}

			setAudioPlaying(false)
		})
	}, [audioPlaying])

	const closeLightbox = () => {
		setSelectedIndex(null)
		setIsZoomed(false)
	}

	const nextImage = () => {
		setSelectedIndex((prev) =>
			prev === imagenesMatrix.length - 1 ? 0 : prev + 1,
		)

		setIsZoomed(false)
	}

	const prevImage = () => {
		setSelectedIndex((prev) =>
			prev === 0 ? imagenesMatrix.length - 1 : prev - 1,
		)

		setIsZoomed(false)
	}

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (selectedIndex === null) return

			if (e.key === 'Escape') closeLightbox()
			if (e.key === 'ArrowRight') nextImage()
			if (e.key === 'ArrowLeft') prevImage()
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [selectedIndex])

	const openLightbox = (index) => {
		setSelectedIndex(index)
		setIsZoomed(false)
	}

	const toggleAudio = () => {
		setAudioPlaying((prev) => !prev)
	}

	return (
		<>
			<SEO
				title="Galería"
				description="Imágenes de la matrix"
			/>

			<div className="flex flex-col gap-6 pb-10">
				<audio
					ref={audioRef}
					src="/Matrix Act 1 the awakeni.mp4"
					loop
					preload="auto"
				/>

				<SectionHeader
					title="Galería"
					subtitle="Imágenes de la matrix."
				/>

				<Button
					onClick={toggleAudio}
					text={audioPlaying ? 'Pausar música' : 'Activar música ambiental'}
				/>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full relative z-10">
					{imagenesMatrix.map((img, index) => (
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

				{selectedIndex !== null && (
					<div
						className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-md"
						onClick={closeLightbox}
					>
						<div
							className="absolute top-6 right-6 z-50"
							onClick={(e) => e.stopPropagation()}
						>
							<Button
								onClick={closeLightbox}
								text="Cerrar (Esc)"
							/>
						</div>

						<div
							className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 z-50"
							onClick={(e) => e.stopPropagation()}
						>
							<Button
								onClick={prevImage}
								text="Imagen anterior"
							/>

							<Button
								onClick={nextImage}
								text="Imagen siguiente"
							/>
						</div>

						<div
							className="relative w-full max-w-4xl h-[75vh] flex flex-col items-center justify-center z-40"
							onClick={(e) => e.stopPropagation()}
						>
							<div
								className={`flex-1 w-full flex items-center justify-center overflow-auto rounded ${
									isZoomed ? 'items-start' : ''
								}`}
							>
								<img
									src={imagenesMatrix[selectedIndex].src}
									alt={imagenesMatrix[selectedIndex].alt}
									className={`max-w-full object-contain rounded border border-green-500 shadow-2xl shadow-green-500/30 transition-transform duration-300 ${
										isZoomed
											? 'scale-[1.7] cursor-zoom-out origin-center'
											: 'scale-100 cursor-zoom-in max-h-[65vh]'
									}`}
									onClick={(e) => {
										e.stopPropagation()
										setIsZoomed((prev) => !prev)
									}}
								/>
							</div>

							<p className="mt-4 text-green-400 text-sm tracking-widest bg-black/80 px-4 py-2 border border-green-900 rounded uppercase shrink-0">
								{imagenesMatrix[selectedIndex].alt} — [
								{selectedIndex + 1} / {imagenesMatrix.length}]
							</p>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default GaleriaMatrix
