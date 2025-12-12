import { FC, memo } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from '../utils'

const SectionWrapper = (Component: FC, idName: string): FC => {
	const HOC: FC = memo(() => {
		return (
			<motion.section
				variants={staggerContainer(0, 0)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, margin: '0px 0px -200px 0px' }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
				<span className='hash-span' id={idName}>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		)
	})

	return HOC
}

export default SectionWrapper
