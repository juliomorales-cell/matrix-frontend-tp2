import SectionHeader from '../SectionHeader'
import { getIcon } from './iconMap'
import { itemClass, sectionClass } from './profileStyles'

const SocialLinksSection = ({ socialLinks = [] }) => {
	if (socialLinks.length === 0) return null

	return (
		<section className={sectionClass}>
			<SectionHeader
				title="Social Links"
				subtitle="Canales externos asociados al tripulante."
			/>

			<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
				{socialLinks.map((link) => (
					<a
						key={link.label}
						href={link.href}
						target="_blank"
						rel="noreferrer"
						className={`${itemClass} group flex items-center justify-between hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:text-black`}
					>
						<span className="flex items-center gap-3">
							<span className="grid h-10 w-10 place-items-center rounded-lg border border-green-500/25 bg-black text-lg text-green-500">
								{getIcon(link.icono)}
							</span>

							<span className="text-xs font-bold uppercase tracking-widest">
								{link.label}
							</span>
						</span>

						<span className="opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100">
							→
						</span>
					</a>
				))}
			</div>
		</section>
	)
}

export default SocialLinksSection
