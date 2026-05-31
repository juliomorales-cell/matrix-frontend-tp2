import { FaIdBadge, FaMapMarkerAlt, FaUserShield } from 'react-icons/fa'

import Button from '../Button'
import ProfileInfoItem from './ProfileInfoItem'
import { panelClass } from './profileStyles'

const ProfileHero = ({ tripulante, onBack }) => {
	return (
		<section className={panelClass}>
			<div className="grid gap-6 md:grid-cols-[190px_1fr] md:items-center">
				<div className="mx-auto h-44 w-44 overflow-hidden rounded-full border-2 border-green-500/60 bg-green-950 shadow-[0_0_35px_rgba(0,255,65,0.3)]">
					<img
						src={tripulante.avatar}
						alt={tripulante.nombre}
						className="h-full w-full object-cover object-center opacity-95"
					/>
				</div>

				<div>
					<div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<p className="text-xs uppercase tracking-[0.35em] text-green-700">
								{tripulante.rol}
							</p>

							<h1 className="mt-2 text-4xl font-black uppercase text-green-500 drop-shadow-[0_0_12px_rgba(0,255,65,0.6)] sm:text-5xl">
								{tripulante.nombre}
							</h1>
						</div>

						<div className="w-fit">
							<Button onClick={onBack} text="← Volver" />
						</div>
					</div>

					<p className="max-w-3xl text-sm leading-relaxed text-green-100/80 sm:text-base">
						{tripulante.bio}
					</p>

					<div className="mt-5 grid gap-2 sm:grid-cols-3">
						<ProfileInfoItem
							icon={<FaIdBadge />}
							label="ID"
							value={`#${tripulante.id}`}
						/>

						<ProfileInfoItem
							icon={<FaUserShield />}
							label="Nivel"
							value={tripulante.nivel}
						/>

						<ProfileInfoItem
							icon={<FaMapMarkerAlt />}
							label="Ubicación"
							value={tripulante.ubicacion}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProfileHero
