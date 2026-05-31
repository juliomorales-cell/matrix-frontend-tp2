import { useNavigate } from 'react-router-dom'
import Card from './Card'

const TeamGrid = ({ members }) => {
	const navigate = useNavigate()

	const onClick = (nombre) => {
		const nombreNormalizado = nombre.toLocaleLowerCase().trim()
		navigate(`/integrantes/${nombreNormalizado}`)
	}

	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
			{members.map((member) => (
				<Card
					key={member.id}
					onClick={() => onClick(member.nombre)}
					title={member.nombre}
					subtitle={member.role}
					imgSrc={member.avatar}
				/>
			))}
		</div>
	)
}

export default TeamGrid
