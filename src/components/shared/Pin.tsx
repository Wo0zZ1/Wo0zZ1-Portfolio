import { FC, memo } from 'react'
import { motion } from 'framer-motion'

const Pin: FC = memo(() => {
	return (
		<motion.div
			animate={{ x: [-20, 0], opacity: [0, 1] }}
			transition={{
				delay: 0.5,
			}}
			className='mt-5 flex flex-col items-center justify-center'>
			<div className='h-5 w-5 rounded-full bg-[#915eff]' />
			<div className='violet-gradient h-40 w-1 sm:h-80' />
		</motion.div>
	)
})

export default Pin
