const ProfileInfoItem = ({ icon, label, value }) => {
	if (!value) return null

	return (
		<div className="min-w-0 rounded-lg border border-green-500/20 bg-black/60 px-3 py-2 text-xs text-green-400">
			<div className="flex min-w-0 items-center gap-2">
				<span className="shrink-0 text-green-500">{icon}</span>
				<span className="shrink-0 text-green-700">{label}:</span>
				<span className="min-w-0 break-words font-bold text-green-300">{value}</span>
			</div>
		</div>
	)
}

export default ProfileInfoItem
