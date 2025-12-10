import { FC } from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader: FC = () => {
	const { progress } = useProgress()

	return (
		<Html>
			<span className='canvas-load'></span>
			<p
				style={{
					fontSize: 14,
					color: 'var(--text-loader)',
					fontWeight: 800,
					marginTop: 40,
				}}>
				{progress.toFixed(2)}%
			</p>
		</Html>
	)
}

export default Loader
