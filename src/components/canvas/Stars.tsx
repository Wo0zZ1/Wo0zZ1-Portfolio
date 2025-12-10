import { useRef, Suspense, FC, memo, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import { Group, Object3DEventMap } from 'three'
import * as random from 'maath/random/dist/maath-random.cjs'

const Stars: FC = memo(props => {
	const pointsRef = useRef<Group<Object3DEventMap> | null>(null)

	const sphere = useMemo(
		() => new Float32Array(random.inSphere(new Float32Array(5000), { radius: 1.2 })),
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
			<Points positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color='var(--color-accent-pink)'
					size={0.002}
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
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
					<Preload all />
				</Suspense>
			</Canvas>
		</div>
	)
})

export default StarsCanvas
