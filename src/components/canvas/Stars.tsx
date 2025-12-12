import { Group } from 'three'
import { inSphere } from 'maath/random'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, Suspense, FC, memo, useMemo } from 'react'
import { Points, PointMaterial, Preload } from '@react-three/drei'

import { useCSSVariable } from '../../hooks'

const Stars: FC = memo(() => {
	const pointsRef = useRef<Group>(null)
	const accentColor = useCSSVariable('--color-accent-pink')

	const sphere = useMemo(
		() => new Float32Array(inSphere(new Float32Array(3 * 2500), { radius: 1.1 })),
		[],
	)

	useFrame((_state, delta) => {
		if (pointsRef.current?.rotation) {
			pointsRef.current.rotation.x -= delta / 10
			pointsRef.current.rotation.y -= delta / 10
		}
	})

	return (
		<group ref={pointsRef} rotation={[0, 0, Math.PI / 4]}>
			<Points positions={sphere} stride={3} frustumCulled>
				<PointMaterial
					transparent
					size={0.003}
					color={accentColor}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	)
})

const StarsCanvas: FC = memo(() => {
	return (
		<div className='w-full h-auto absolute inset-0 z-[-1]'>
			<Canvas
				camera={{ position: [0, 0, 1] }}
				dpr={[1, 2]}
				gl={{
					antialias: false,
					powerPreference: 'high-performance',
				}}>
				<Suspense fallback={null}>
					<Stars />
					<Preload all />
				</Suspense>
			</Canvas>
		</div>
	)
})

export default StarsCanvas
