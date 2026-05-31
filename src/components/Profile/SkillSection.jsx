import SectionHeader from '../SectionHeader'
import { itemClass, sectionClass } from './profileStyles'

const SkillSection = ({ habilidades = [] }) => {
	if (habilidades.length === 0) return null

	return (
		<section className={sectionClass}>
			<SectionHeader
				title="Habilidades"
				subtitle="Nivel técnico del tripulante dentro del sistema."
			/>

			<div className="grid gap-3 sm:grid-cols-2">
				{habilidades.map((habilidad) => (
					<article key={habilidad.nombre} className={itemClass}>
						<div className="mb-2 flex justify-between text-xs">
							<span className="text-green-200">
								{habilidad.nombre}
							</span>
							<span className="text-green-500">
								{habilidad.nivel}%
							</span>
						</div>

						<div className="h-2.5 overflow-hidden rounded-full bg-green-950/80">
							<div
								className="h-full origin-left rounded-full bg-green-500 shadow-[0_0_12px_rgba(0,255,65,0.8)]"
								style={{
									width: `${habilidad.nivel}%`,
									transform: 'scaleX(0)',
									animation:
										'matrixLoad 900ms ease-out forwards',
								}}
							/>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default SkillSection
