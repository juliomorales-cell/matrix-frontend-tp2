import { Terminal } from "lucide-react"

const SidebarHeader = ({ collapsed }) => {
    return (
		<div
			className={`border-b-2 border-green-900 flex flex-col items-center gap-2
          ${collapsed ? 'p-3' : 'p-5'}`}
		>
			<div
				className={`bg-black border-2 border-green-500 rounded-full flex items-center justify-center
            shadow-[0_0_15px_rgba(0,255,65,0.5)]
            ${collapsed ? 'w-10 h-10' : 'w-14 h-14'}`}
			>
				<Terminal
					size={collapsed ? 18 : 28}
					className="text-green-500 animate-pulse"
				/>
			</div>
			{!collapsed && (
				<h1 className="text-xl font-black text-green-500 text-center tracking-tighter leading-tight drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]">
					THE SYSTEM
					<br />
					GROUP 1
				</h1>
			)}
		</div>
    )
}

export default SidebarHeader
