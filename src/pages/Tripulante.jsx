import { useParams } from 'react-router-dom';

import PerfilMartin from '../profiles/PerfilMartin';
import PerfilRodrigo from '../profiles/PerfilRodrigo';
import PerfilFacundo from '../profiles/PerfilFacundo';
import PerfilFlorencia from '../profiles/PerfilFlorencia';

export default function Tripulante({ tripulantes }) {
  const { id } = useParams();
  const tripulante = tripulantes.find(t => t.id === parseInt(id));

  if (!tripulante) {
    return <h2 className="text-2xl text-green-500">&gt; TRIPULANTE NO ENCONTRADO_</h2>;
  }

  switch (tripulante.id) {
    case 1:
      return <PerfilMartin tripulante={tripulante} />;
    case 2:
      return <PerfilRodrigo tripulante={tripulante} />;
    case 3:
      return <PerfilFacundo tripulante={tripulante} />;
    case 4:
      return <PerfilFlorencia tripulante={tripulante} />;
    default:
      return <h2 className="text-2xl text-green-500">&gt; ERROR: PERFIL NO IMPLEMENTADO_</h2>;
  }
}