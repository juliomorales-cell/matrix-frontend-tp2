import {
	FaReact,
	FaNodeJs,
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaExternalLinkAlt,
} from 'react-icons/fa'

import {
	SiJavascript,
	SiNextdotjs,
	SiTailwindcss,
	SiCloudflare,
	SiTypescript,
} from 'react-icons/si'

const iconMap = {
	react: <FaReact />,
	nextjs: <SiNextdotjs />,
	nodejs: <FaNodeJs />,
	javascript: <SiJavascript />,
	typescript: <SiTypescript />,
	tailwind: <SiTailwindcss />,
	cloudflare: <SiCloudflare />,
	github: <FaGithub />,
	linkedin: <FaLinkedin />,
	instagram: <FaInstagram />,
	external: <FaExternalLinkAlt />,
}

export const getIcon = (icono) => {
	return iconMap[icono] ?? iconMap.external
}
