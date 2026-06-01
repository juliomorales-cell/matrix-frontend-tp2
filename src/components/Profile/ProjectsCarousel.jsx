import { useState } from 'react'

import Button from '../Button'
import Card from '../Card'
import SectionHeader from '../SectionHeader'
import { panelClass, sectionClass } from './profileStyles'

const ProjectsCarousel = ({ projectos = [] }) => {
	const [actual, setActual] = useState(0)

	if (projectos.length === 0) return null

	const projecto = projectos[actual]

	const cambiarProjecto = (direccion) => {
		setActual((actual + direccion + projectos.length) % projectos.length)
	}

	return (
		<section className={`${sectionClass} min-w-0 overflow-hidden`}>
			<div className="space-y-3">
				<SectionHeader
					title="Proyectos"
					subtitle="Interfaces desarrolladas dentro de la simulación."
				/>

				<div className="flex justify-end gap-2">
					<Button onClick={() => cambiarProjecto(-1)} text="←" />
					<Button onClick={() => cambiarProjecto(1)} text="→" />
				</div>
			</div>

			<div className={`${panelClass} min-w-0 overflow-hidden`}>
				<div className="grid min-w-0 gap-5 xl:grid-cols-[1.3fr_0.7fr]">
					<div className="group relative aspect-video w-full min-w-0 overflow-hidden rounded-xl border border-green-500/25 bg-black">
						<img
							src={projecto.imagen}
							alt={projecto.titulo}
							className="h-full w-full max-w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
						/>

						<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
					</div>

					<article className="min-w-0 rounded-xl border border-green-500/20 bg-black/60 p-5">
						<p className="mb-2 text-xs text-green-600">
							[{actual + 1}/{projectos.length}]
						</p>

						<h3 className="mb-3 break-words text-2xl font-black uppercase text-green-500">
							{projecto.titulo}
						</h3>

						<p className="text-sm leading-relaxed text-green-100/75">
							{projecto.descripcion}
						</p>

						<div className="mt-5 rounded-lg border border-green-500/20 bg-green-500/10 px-3 py-2 text-xs uppercase tracking-widest text-green-400">
							{projecto.stack}
						</div>
					</article>
				</div>

				<div className="mt-5 grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-5">
					{projectos.map((projectoItem, index) => (
						<div
							key={projectoItem.titulo}
							className={
								actual === index
									? 'min-w-0 rounded border border-green-500 shadow-[0_0_18px_rgba(0,255,65,0.35)]'
									: 'min-w-0 rounded border border-transparent'
							}
						>
							<Card
								onClick={() => setActual(index)}
								imgSrc={projectoItem.imagen}
								title={projectoItem.titulo}
								subtitle={projectoItem.stack}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectsCarousel
