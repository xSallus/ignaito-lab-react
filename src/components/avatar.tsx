import { useState, useEffect } from 'react'
import { User } from 'phosphor-react'
import { Loader } from './loader'

type AvatarProps = {
	source?: string | null;
	className?: string;
}

export function Avatar({
	source, className
}:AvatarProps) {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false)
		}, 3000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<div className={[
			"h-16 w-16 rounded-full bg-blue-400 overflow-hidden border-4 border-blue-400 flex items-center justify-center peer",
			className ?? ""
		].join(" ")}>
			{loading ? (
				<Loader
					type="spinner"
					className="after:bg-blue-400 after:h-15 after:w-15"
				/>
			) : (
				source ? (
					<img
						src={source}
						className="h-full w-full object-cover"      
					/>
				) : (
					<User
						size={16}
						weight="fill"
						className="text-gray-100"
					/>
				)
			)}
		</div>
	)
}
