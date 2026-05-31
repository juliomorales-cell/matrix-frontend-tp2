import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import ErrorMessage from '../components/ErrorMessage'
import ProfileHero from '../components/Profile/ProfileHero'
import SkillSection from '../components/Profile/SkillSection'
import TechStackSection from '../components/Profile/TechStackSection'
import ProjectsCarousel from '../components/Profile/ProjectsCarousel'
import SocialLinksSection from '../components/Profile/SocialLinksSection'

const PerfilFacundo = ({ tripulante }) => {
	const navigate = useNavigate()

	if (!tripulante) {
		return <ErrorMessage text="Error al cargar el perfil" />
	}

	return (
		<>
			<SEO
				title={tripulante.nombre}
				description={tripulante.bio}
				image={tripulante.avatar}
			/>
			
			<div className="mx-auto w-full max-w-6xl min-w-0 space-y-10 overflow-hidden text-green-100">
				<ProfileHero tripulante={tripulante} onBack={() => navigate(-1)} />

				<div className="grid gap-10 xl:grid-cols-2">
					<SkillSection habilidades={tripulante.habilidades} />
					<TechStackSection techStack={tripulante.techStack} />
				</div>

				<ProjectsCarousel projectos={tripulante.projectos} />
				<SocialLinksSection socialLinks={tripulante.socialLinks} />
			</div>
		</>
	)
}

export default PerfilFacundo
