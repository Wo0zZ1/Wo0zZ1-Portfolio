import { FC, memo, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useCSSVariable } from '../../hooks'

const Ball: FC<{ imgUrl: string }> = memo(({ imgUrl }) => {
	const [decal] = useTexture([imgUrl])
	const meshColor = useCSSVariable('--color-mesh')

	return (
		<>
			<Float speed={5} autoInvalidate={true} rotationIntensity={1} floatIntensity={1}>
				<ambientLight intensity={0.25} />
				<directionalLight position={[0, 0, 0.05]} />
				<mesh castShadow receiveShadow scale={2.75}>
					<icosahedronGeometry args={[1, 1]} />
					<meshStandardMaterial
						color={meshColor}
						polygonOffset
						polygonOffsetFactor={-5}
						flatShading
					/>
					<Decal
						position={[0, 0, 1]}
						rotation={[2 * Math.PI, 0, 6.25]}
						scale={1}
						map={decal}
					/>
				</mesh>
			</Float>
		</>
	)
})

const BallCanvas: FC<{ icon: string }> = memo(({ icon }) => {
	return (
		<Canvas 
			frameloop='demand' 
			dpr={[1, 2]}
			gl={{ 
				preserveDrawingBuffer: true,
				antialias: false,
				powerPreference: 'high-performance'
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enablePan={false} enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
})

export default BallCanvas
