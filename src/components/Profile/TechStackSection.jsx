import SectionHeader from '../SectionHeader'
import { getIcon } from './iconMap'
import { itemClass, sectionClass } from './profileStyles'

const TechStackSection = ({ techStack = [] }) => {
	if (techStack.length === 0) return null

	return (
		<section className={sectionClass}>
			<SectionHeader
				title="Tech Stack"
				subtitle="Herramientas conectadas al perfil operativo."
			/>

			<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
				{techStack.map((tech) => (
					<article
						key={tech.nombre}
						className={`${itemClass} group text-center hover:-translate-y-1 hover:border-green-500 hover:bg-green-500/10`}
					>
						<div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-lg border border-green-500/25 bg-black text-2xl text-green-500 transition group-hover:scale-110 group-hover:text-green-300">
							{getIcon(tech.icono)}
						</div>

						<p className="text-xs uppercase tracking-widest text-green-500">
							{tech.nombre}
						</p>
					</article>
				))}
			</div>
		</section>
	)
}

export default TechStackSection
