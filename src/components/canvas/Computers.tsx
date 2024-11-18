import { FC, memo, Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
	OrbitControls,
	Preload,
	useGLTF,
} from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers: FC = memo(() => {
	const computer = useGLTF('./desktop_pc/scene.gltf')

	const [width, setWidth] = useState(window.innerWidth)

	// TODOD create hook useWidth
	useEffect(() => {
		const resizeHandler = (e: UIEvent) =>
			e.target instanceof Window && setWidth(e.target.innerWidth)

		addEventListener('resize', resizeHandler)

		return () => {
			removeEventListener('resize', resizeHandler)
		}
	}, [])

	let scale = 0
	if (width >= 640) scale = 0.65
	else if (width >= 500) scale = 0.5
	else scale = 0.35

	return (
		<mesh>
			<hemisphereLight intensity={0.4} groundColor='black' />
			<spotLight
				position={[10, 10, 0]}
				angle={0.75 * Math.PI}
				penumbra={1}
				intensity={500}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={computer.scene}
				scale={scale}
				position={width < 640 ? [0, -2, -0.7] : [0, -2.25, -1.3]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	)
})

const ComputerCanvas: FC = memo(() => {
	return (
		<Canvas
			frameloop='demand'
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers />
			</Suspense>
			<Preload all />
		</Canvas>
	)
})

export default ComputerCanvas
