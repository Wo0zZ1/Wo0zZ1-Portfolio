import { FC, memo, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
import { useDimensions } from '../../hooks'

const Computers: FC = memo(() => {
	const computer = useGLTF('./desktop_pc/scene.gltf')

	const { width } = useDimensions()

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
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{
				preserveDrawingBuffer: true,
				powerPreference: 'high-performance',
			}}>
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
