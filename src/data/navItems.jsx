import {
	Terminal,
	Users,
	Database,
	Globe,
	ImageIcon,
	BookOpen,
	Network,
} from 'lucide-react'

export const navItems = [
	{ to: '/', icon: <Terminal size={20} />, text: '>_Inicio' },
	{ to: '/integrantes', icon: <Users size={20} />, text: 'Tripulación' },
	{ to: '/datos', icon: <Database size={20} />, text: 'Archivos JSON' },
	{ to: '/api', icon: <Globe size={20} />, text: 'Red Externa' },
	{ to: '/galeria', icon: <ImageIcon size={20} />, text: 'Galería' },
	{ to: '/bitacora', icon: <BookOpen size={20} />, text: 'Bitácora' },
	{ to: '/arbol', icon: <Network size={20} />, text: 'Árbol Render' },
]
