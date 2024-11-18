import { FC, memo } from 'react'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { experiences, IExperience } from '../constants'
import { SectionWrapper } from '../hocs'
import { textVariant } from '../utils/motion'

import { styles } from '../styles'
import useLang from '../hooks/useLang'

const ExperienceCard: FC<IExperience> = memo(
	({ company_name, date, icon, iconBg, points, title }) => {
		const { lang } = useLang()

		return (
			<VerticalTimelineElement
				contentStyle={{
					background: '#1d1836',
					color: '#ffffff',
				}}
				contentArrowStyle={{ borderRight: '7px solid #232631' }}
				date={date[lang]}
				icon={
					<div className='flex h-full w-full items-center justify-center'>
						<img
							src={icon}
							alt={company_name}
							className='h-[60%] w-[60%] object-contain'
						/>
					</div>
				}
				iconStyle={{ background: iconBg }}>
				<div>
					<h3 className='text-[24px] font-bold text-white'>
						{title[lang]}
					</h3>
					<p className='!m-0 text-[16px] font-semibold text-secondary'>
						{company_name}
					</p>
				</div>

				<ul className='ml-5 mt-5 list-disc space-y-2'>
					{points.map((point, index) => (
						<li
							key={`experience-point-${index}`}
							className='pl-1 text-[14px] tracking-wider text-white-100'>
							{point[lang]}
						</li>
					))}
				</ul>
			</VerticalTimelineElement>
		)
	},
)

const Experience: FC = memo(() => {
	const { lang, translations } = useLang()

	return (
		<>
			<motion.div variants={textVariant(0)}>
				<p className={styles.sectionSubText}>
					{translations[lang].experience.my_path}
				</p>
				<h2 className={styles.sectionHeadText}>
					{translations[lang].experience.work_experience}
				</h2>
			</motion.div>

			<div className='mt-20 flex flex-col overflow-hidden'>
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} {...experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	)
})

export default SectionWrapper(Experience, 'work')
