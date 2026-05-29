import NavItem from "./NavItem"
import SidebarHeader from "./SidebarHeader";

/* ── Contenido interior del sidebar ── */
const SidebarContent = ({ navItems, onNavClick, collapsed = false }) => (
	<div className="flex flex-col h-full">
		<SidebarHeader collapsed={collapsed} />

		{/* Nav links */}
		<ul
			className={`flex-1 overflow-y-auto space-y-1
          ${collapsed ? 'p-2' : 'p-4'}`}
		>
			{navItems.map((item) => (
				<NavItem
					key={item.to}
					{...item}
					collapsed={collapsed}
					onClick={onNavClick}
				/>
			))}
		</ul>

		{/* Footer */}
		{!collapsed && (
			<div className="p-3 border-t-2 border-green-900 text-xs text-center text-green-800 shrink-0">
				V 2.0.26 — THE SYSTEM GROUP 1
			</div>
		)}
	</div>
)

export default SidebarContent
