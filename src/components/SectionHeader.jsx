const SectionHeader = ({ title, subtitle }) => {
	return (
		<div className="p-5 border border-green-500 bg-black/80 rounded shadow-[0_0_15px_rgba(0,255,65,0.2)]">
			<h2 className="text-2xl font-bold mb-1 text-green-500">
				&gt; {title}_
			</h2>
			<p className="text-green-700 text-sm">
				{subtitle}
			</p>
		</div>
	)
}

export default SectionHeader
