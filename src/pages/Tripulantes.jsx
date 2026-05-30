import { useState, useEffect, useRef } from 'react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import TeamGrid from '../components/TeamGrid'

const Tripulantes = ({ tripulantes }) => {
	const [audioPlaying, setAudioPlaying] = useState(true)
	const audioRef = useRef(null)

	useEffect(() => {
		const audio = audioRef.current

		if (audio && audioPlaying) {
			audio.play().catch(() => {})
		}

		return () => {
			if (audio) {
				audio.pause()
			}
		}
	}, [audioPlaying])

	const toggleAudio = () => {
		const audio = audioRef.current
		if (!audio) return

		if (audioPlaying) {
			audio.pause()
			setAudioPlaying(false)
		} else {
			audio
				.play()
				.then(() => setAudioPlaying(true))
				.catch(() => {})
		}
	}

	return (
		<div className="flex flex-col gap-6 z-10 relative pb-10">
			<SectionHeader
				title="NÚCLEO DE LA TRIPULACIÓN"
				subtitle="Selecciona una silueta para acceder al expediente."
			/>

			<audio
				ref={audioRef}
				src="/seleccion-tripulante.mp3"
				loop
				preload="auto"
			/>

			<Button
				onClick={toggleAudio}
				text={audioPlaying ? '🔊 ON' : '🔇 OFF'}
			/>

			<TeamGrid members={tripulantes} />
		</div>
	)
}

export default Tripulantes
