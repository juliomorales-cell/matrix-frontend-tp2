import { Menu, X } from 'lucide-react'
import NavItem from './NavItem'
import SidebarContent from './SidebarContent'
import { useState } from 'react'

const SidebarMobile = ({ navItems }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			{/* Sidebar colapsado: solo íconos */}
			<nav className="w-16 border-r-2 border-green-900 bg-black/90 flex flex-col z-10 shrink-0 shadow-[4px_0_20px_rgba(0,255,65,0.1)]">
				{/* Botón hamburguesa arriba */}
				<button
					onClick={() => setIsOpen(true)}
					className="flex items-center justify-center p-3 border-b-2 border-green-900 text-green-500 hover:text-white hover:bg-green-900/30 transition-colors"
					aria-label="Abrir menú"
				>
					<Menu size={20} />
				</button>

				{/* Solo íconos */}
				<ul className="flex-1 p-2 space-y-1 overflow-y-auto">
					{navItems.map((item) => (
						<NavItem key={item.to} {...item} collapsed={true} />
					))}
				</ul>
			</nav>

			{/* Drawer fullscreen */}
			{isOpen && (
				<>
					{/* Overlay */}
					<div
						className="fixed inset-0 bg-black/70 z-20"
						onClick={() => setIsOpen(false)}
					/>
					{/* Panel */}
					<div
						className="fixed inset-y-0 left-0 w-64 border-r-2 border-green-900 z-30 shadow-[4px_0_30px_rgba(0,255,65,0.2)]"
						style={{ backgroundColor: '#000000' }}
					>
						{/* Botón cerrar */}
						<button
							onClick={() => setIsOpen(false)}
							className="absolute top-3 right-3 text-green-500 hover:text-white transition-colors"
							aria-label="Cerrar menú"
						>
							<X size={20} />
						</button>

						<SidebarContent
							navItems={navItems}
							collapsed={false}
							onNavClick={() => setIsOpen(false)}
						/>
					</div>
				</>
			)}
		</>
	)
}

export default SidebarMobile
