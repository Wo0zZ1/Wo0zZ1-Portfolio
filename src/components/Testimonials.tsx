import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hocs'
import { fadeIn, textVariant } from '../utils/motion'

import { ITestimonial, testimonials } from '../constants'
import { FC, memo } from 'react'
import useLang from '../hooks/useLang'

const FeedbackCard: FC<ITestimonial & { index: number }> = memo(
	({
		index,
		testimonial,
		name,
		designation,
		company,
		image,
	}) => {
		const { lang } = useLang()

		return (
			<motion.div
				variants={fadeIn('', 'spring', index * 0.5, 0.75)}
				className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
				<p className='text-white font-black text-[48px]'>"</p>
				<div className='mt-1'>
					<p className='text-white tracking-wider text-[18px]'>
						{testimonial[lang]}
					</p>

					<div className='mt-7 flex justify-between items-center gap-1'>
						<div className='flex flex-1 flex-col'>
							<p className='text-white font-medium text-[16px]'>
								<span className='blue-text-gradient'>@</span>{' '}
								{name}
							</p>
							<p className='mt-1 text-secondary text-[12px]'>
								{designation} of {company}
							</p>
						</div>

						<img
							src={image}
							alt={`feedback-by-${name}`}
							className='w-10 h-10 rounded-full object-cover'
						/>
					</div>
				</div>
			</motion.div>
		)
	},
)

const Testimonials: FC = memo(() => {
	const { lang, translations } = useLang()

	return (
		<div className='mt-12 bg-black-100 rounded-[20px]'>
			<div
				className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
				<motion.div variants={textVariant(0)}>
					<p className={styles.sectionSubText}>
						{translations[lang].testimonials.what_other_says}
					</p>
					<h2 className={styles.sectionHeadText}>
						{translations[lang].testimonials.testimonials}
					</h2>
				</motion.div>
			</div>
			<div
				className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard
						key={testimonial.name}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
		</div>
	)
})

export default SectionWrapper(Testimonials, 'testimonials')
