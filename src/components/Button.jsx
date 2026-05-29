const Button = ({ onClick, text, disabled = false }) => {
	const styles =
		'border border-green-500 text-green-500 px-4 py-2 cursor-pointer text-sm rounded font-bold disabled:opacity-30 hover:bg-green-500 hover:text-black transition-all'

	return (
		<button onClick={onClick} disabled={disabled} className={styles}>
			{text}
		</button>
	)
}

export default Button
