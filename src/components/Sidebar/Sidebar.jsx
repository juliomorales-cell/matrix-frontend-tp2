import { useState, useEffect } from 'react'
import SidebarMobile from './SidebarMobile'
import SidebarContent from './SidebarContent'
import { navItems } from '../../data/navItems'

const Sidebar = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 1024)

		check()
		window.addEventListener('resize', check)

		return () => window.removeEventListener('resize', check)
	}, [])

	if (isMobile) {
		return <SidebarMobile navItems={navItems} />
	}

	return (
		<nav className="w-64 border-r-2 border-green-900 bg-black/90 flex flex-col z-10 shrink-0 shadow-[4px_0_20px_rgba(0,255,65,0.1)]">
			<SidebarContent navItems={ navItems } collapsed={false} />
		</nav>
	)
}

export default Sidebar
