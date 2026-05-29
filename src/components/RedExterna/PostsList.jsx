import PostCard from './PostCard'

const PostsList = ({ posts }) => {
	if (posts.length === 0) {
		return (
			<div className="border border-green-900 border-dashed bg-black/50 p-8 rounded text-center">
				<p className="text-green-500 font-mono">
					&gt; No se encontraron transmisiones externas.
				</p>
			</div>
		)
	}

	return (
		<div className="grid gap-4">
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	)
}

export default PostsList
