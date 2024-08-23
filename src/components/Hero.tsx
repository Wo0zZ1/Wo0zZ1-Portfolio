import { FC, memo } from 'react'
import { motion } from 'framer-motion'

import { ComputersCanvas } from './canvas'

import { Pin, ScrollTo } from './shared'

import useLang from '../hooks/useLang'

import { styles } from '../styles'

const Hero: FC = memo(() => {
	const { lang, translations } = useLang()

	return (
		<section className='relative mx-auto h-screen w-full'>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}>
				<Pin />

				<motion.div
					animate={{
						x: [-30, 0],
						y: [-100, 0],
						opacity: [0, 1],
					}}
					transition={{
						duration: 1,
					}}>
					<h1 className={styles.heroHeadText}>
						{translations[lang].hero.hello[0]}&nbsp;
						<span className='text-[#915eff]'>
							{translations[lang].hero.hello[1]}
						</span>
					</h1>
					<p
						className={`${styles.heroSubText} mt-2 text-white-100`}>
						{translations[lang].hero.about_me[0]}
						<br className='hidden sm:block' />
						{translations[lang].hero.about_me[1]}
					</p>
				</motion.div>
			</div>

			<ComputersCanvas />

			<ScrollTo href='#about' />
		</section>
	)
})

export default Hero
