const PostCard = ({ post }) => {
	return (
		<article className="border-l-4 border-green-500 bg-black/70 p-5 rounded hover:bg-black/90 transition-colors">
			<h3 className="text-green-500 text-lg font-bold capitalize">
				{post.title}
			</h3>

			<p className="text-gray-400 text-sm mt-2">{post.body}</p>
		</article>
	)
}

export default PostCard
