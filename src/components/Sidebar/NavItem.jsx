import { Link, useLocation } from 'react-router-dom'

const NavItem = ({ to, icon, text, collapsed, onClick }) => {
	const location = useLocation()
	const isActive = location.pathname === to

    // Tailwind
    const linkStyles = `
        flex items-center gap-3 p-2 rounded no-underline
        font-bold transition-all duration-200 group
            ${isActive
                ? 'text-white bg-green-900/40 border border-green-700/50'
                : 'text-[#00FF41] hover:text-white hover:bg-green-900/30 border border-transparent'
                }
            ${collapsed ? 'justify-center' : ''}
        `
    
    const activeStyles = 'shrink-0 text-[#00FF41] group-hover:drop-shadow-[0_0_6px_rgba(0,255,65,0.9)] transition-all'

    const textStyles = 'text-sm tracking-wide whitespace-nowrap overflow-hidden'

	return (
		<li className="list-none">
			<Link
				to={to}
				onClick={onClick}
				title={ collapsed ? text : undefined }
				className={ linkStyles }
				style={{ textShadow: isActive ? '0 0 8px rgba(0,255,65,0.8)' : undefined }}
			>
				<span
					className={ activeStyles }
					style={{ filter: isActive ? 'drop-shadow(0 0 6px #00FF41)'	: undefined	}}
				>
					{icon}
				</span>
				{!collapsed && (
					<span className={ textStyles }>
						{text}
					</span>
				)}
			</Link>
		</li>
	)
}

export default NavItem
