import { FC, memo } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { IService, services } from '../constants'
import { fadeIn, textVariant } from '../utils/'

import { SectionWrapper } from '../hocs'
import useLang from '../hooks/useLang'

const ServiceCard: FC<IService & { index: number }> = memo(
	({ index, title, icon }) => {
		const { lang } = useLang()

		return (
			<Tilt
				options={{
					max: 35,
					scale: 1.05,
					speed: 450,
					reverse: true,
				}}
				className='w-full xs:w-[250px]'>
				<motion.div
					variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
					className='green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card'>
					<div className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5'>
						<img
							src={icon}
							alt={title[lang]}
							className='h-16 w-16 object-contain'
						/>
						<h3 className='text-center text-[20px] font-bold text-white'>
							{title[lang]}
						</h3>
					</div>
				</motion.div>
			</Tilt>
		)
	},
)

const About: FC = memo(() => {
	const { lang, translations } = useLang()

	return (
		<>
			<motion.div variants={textVariant(0)}>
				<p className={styles.sectionSubText}>
					{translations[lang].about.introduction}
				</p>
				<h2 className={styles.sectionHeadText}>
					{translations[lang].about.overwiew}
				</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary'>
				{translations[lang].about.description}
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard
						key={service.title.en}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	)
})

export default SectionWrapper(About, 'about')
