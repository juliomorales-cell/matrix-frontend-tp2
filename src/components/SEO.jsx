import { useEffect } from 'react'

const DEFAULT_TITLE = 'The System Group 1'
const DEFAULT_DESCRIPTION =	'Interfaz Matrix con perfiles, tripulación y archivos del sistema.'

const setMetaTag = (name, content, attribute = 'name') => {
	if (!content) return

	let element = document.querySelector(`meta[${attribute}="${name}"]`)

	if (!element) {
		element = document.createElement('meta')
		element.setAttribute(attribute, name)
		document.head.appendChild(element)
	}

	element.setAttribute('content', content)
}

const SEO = ({
	title = DEFAULT_TITLE,
	description = DEFAULT_DESCRIPTION,
	image,
	type = 'website',
}) => {
	useEffect(() => {
		const pageTitle =
			title === DEFAULT_TITLE ? title : `${title} | ${DEFAULT_TITLE}`

		document.title = pageTitle

		setMetaTag('description', description)

		setMetaTag('og:title', pageTitle, 'property')
		setMetaTag('og:description', description, 'property')
		setMetaTag('og:type', type, 'property')

		if (image) {
			setMetaTag('og:image', image, 'property')
		}

		setMetaTag('twitter:card', image ? 'summary_large_image' : 'summary')
		setMetaTag('twitter:title', pageTitle)
		setMetaTag('twitter:description', description)

		if (image) {
			setMetaTag('twitter:image', image)
		}
	}, [title, description, image, type])

	return null
}

export default SEO
