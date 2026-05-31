import { useNavigate } from "react-router-dom";

import ErrorMessage from "../components/ErrorMessage";
import ProfileHero from "../components/Profile/ProfileHero";
import SkillSection from "../components/Profile/SkillSection";
import TechStackSection from "../components/Profile/TechStackSection";
import ProjectsCarousel from "../components/Profile/ProjectsCarousel";
import SocialLinksSection from "../components/Profile/SocialLinksSection";

const PerfilFacundo = ({ tripulante }) => {
  const navigate = useNavigate();

  if (!tripulante) {
    return <ErrorMessage text="Error al cargar el perfil" />;
  }

  return (
    <div className="mx-auto max-w-6xl space-y-10 text-green-100">
      <ProfileHero tripulante={tripulante} onBack={() => navigate(-1)} />

      <div className="grid gap-10 lg:grid-cols-2">
        <SkillSection habilidades={tripulante.habilidades} />
        <TechStackSection techStack={tripulante.techStack} />
      </div>

      <ProjectsCarousel projectos={tripulante.projectos} />

      <SocialLinksSection socialLinks={tripulante.socialLinks} />
    </div>
  );
};

export default PerfilFacundo;