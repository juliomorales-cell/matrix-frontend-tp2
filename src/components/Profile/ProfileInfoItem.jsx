const ProfileInfoItem = ({ icon, label, value }) => {
	if (!value) return null

	return (
		<div className="flex items-center gap-3 rounded-lg border border-green-500/20 bg-black/60 px-3 py-2 text-xs text-green-400">
			<span className="text-green-500">{icon}</span>
			<span className="text-green-700">{label}:</span>
			<span className="font-bold text-green-300">{value}</span>
		</div>
	)
}

export default ProfileInfoItem
