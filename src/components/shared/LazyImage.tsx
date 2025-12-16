import { useState, useEffect, useRef } from 'react'

interface LazyImageProps {
	src: string
	alt: string
	className?: string
	placeholderColor?: string
}

const LazyImage = ({
	src,
	alt,
	className = '',
	placeholderColor = '#1a1a2e',
}: LazyImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [isInView, setIsInView] = useState(false)

	const imgRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsInView(true)
						observer.disconnect()
					}
				})
			},
			{ rootMargin: '1000px' },
		)

		if (imgRef.current) observer.observe(imgRef.current)

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div
			ref={imgRef}
			className={`relative overflow-hidden ${className}`}
			style={{ backgroundColor: isLoaded ? 'transparent' : placeholderColor }}>
			{isInView && (
				<img
					src={src}
					alt={alt}
					loading='lazy'
					className={`w-full h-full object-cover transition-opacity duration-300 ${
						isLoaded ? 'opacity-100' : 'opacity-0'
					}`}
					onLoad={() => setIsLoaded(true)}
				/>
			)}
			{!isLoaded && (
				<div className='absolute inset-0 flex items-center justify-center'>
					<div className='animate-pulse text-gray-400'>Загрузка...</div>
				</div>
			)}
		</div>
	)
}

export default LazyImage
