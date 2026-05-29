import { useEffect, useMemo, useState } from 'react'
import Header from '../components/RedExterna/Header'
import LoadingState from '../components/RedExterna/LoadingState'
import ErrorState from '../components/RedExterna/ErrorState'
import PostsList from '../components/RedExterna/PostsList'
import Pagination from '../components/RedExterna/Pagination'

const POSTS_POR_PAGINA = 5
const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const RedExterna = () => {
	const [posts, setPosts] = useState([])
	const [paginaActual, setPaginaActual] = useState(1)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const totalPaginas = Math.ceil(posts.length / POSTS_POR_PAGINA)

	const postsPagina = useMemo(() => {
		const inicio = (paginaActual - 1) * POSTS_POR_PAGINA
		return posts.slice(inicio, inicio + POSTS_POR_PAGINA)
	}, [posts, paginaActual])

	useEffect(() => {
		const fetchDatos = async () => {
			try {
				setLoading(true)
				setError(null)

				const response = await fetch(API_URL)

				if (!response.ok) {
					throw new Error('Conexión rechazada')
				}

				const data = await response.json()
				setPosts(data)
			} catch (error) {
				console.error(error)

				setError(
					'Error de conexión: Enlace con la Red Externa interrumpido por los Centinelas.',
				)
			} finally {
				setLoading(false)
			}
		}

		fetchDatos()
	}, [])

	const irPaginaAnterior = () => {
		setPaginaActual((pagina) => Math.max(1, pagina - 1))
	}

	const irPaginaSiguiente = () => {
		setPaginaActual((pagina) => Math.min(totalPaginas, pagina + 1))
	}

	return (
		<div className="flex flex-col gap-6 pb-10">
			<Header />

			{loading && <LoadingState />}

			{!loading && error && <ErrorState message={error} />}

			{!loading && !error && (
				<>
					<PostsList posts={postsPagina} />

					<Pagination
						paginaActual={paginaActual}
						totalPaginas={totalPaginas}
						onAnterior={irPaginaAnterior}
						onSiguiente={irPaginaSiguiente}
					/>
				</>
			)}
		</div>
	)
}

export default RedExterna
