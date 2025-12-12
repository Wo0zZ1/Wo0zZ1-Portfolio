import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hocs'
import { fadeIn, textVariant } from '../utils'

import { ITestimonial, testimonials } from '../constants'
import { FC, memo } from 'react'
import { useLang } from '../hooks'

const FeedbackCard: FC<ITestimonial & { index: number }> = memo(
	({ index, testimonial, name, designation, company, image }) => {
		const { lang } = useLang()

		return (
			<motion.div
				variants={fadeIn('', 'spring', index * 0.5, 0.75)}
				className='bg-black-200 p-10 rounded-3xl w-full'>
				<p className='font-black text-[48px]' style={{ color: 'var(--text-on-card)' }}>
					"
				</p>
				<div className='mt-1'>
					<p
						className='tracking-wider text-[18px]'
						style={{ color: 'var(--text-on-card)' }}>
						{testimonial[lang]}
					</p>

					<div className='mt-7 flex justify-between items-center gap-1'>
						<div className='flex flex-1 flex-col'>
							<p
								className='font-medium text-[16px]'
								style={{ color: 'var(--text-on-card)' }}>
								<span className='blue-text-gradient'>@</span> {name}
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
				className={`${styles.padding} rounded-2xl min-h-[200px] sm:min-h-[230px] md:min-h-[260px] xl:min-h-[300px]`}
				style={{ backgroundColor: 'var(--bg-testimonials-header)' }}>
				<motion.div variants={textVariant(0)}>
					<p className={styles.sectionSubText}>
						{translations[lang].testimonials.what_other_says}
					</p>
					<h2 className={`${styles.sectionHeadText} text-text-heading`}>
						{translations[lang].testimonials.testimonials}
					</h2>
				</motion.div>
			</div>
			<div
				className={`${styles.paddingX} pb-3 sm:pb-6 md:pb-10 xl:pb-14 -mt-20 grid grid-cols-[repeat(auto-fit,minmax(min(320px,80%),1fr))] justify-items-center gap-7`}>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard key={testimonial.name} index={index} {...testimonial} />
				))}
			</div>
		</div>
	)
})

export default SectionWrapper(Testimonials, 'testimonials')
