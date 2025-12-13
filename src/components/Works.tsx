import { FC, memo } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { SectionWrapper } from '../hocs'

import github from '../assets/github.png'

import { projects } from '../constants'
import { IProject } from '../constants'

import { useLang } from '../hooks'

import { fadeIn, textVariant } from '../utils'

import { styles } from '../styles'
import { Link } from 'react-router-dom'

const ProjectCard: FC<IProject & { index: number }> = memo(
	({ index, name, description, tags, image, source_code_link, site_link }) => {
		const { lang } = useLang()

		return (
			<motion.div
				className='w-full h-full mt-8 grid row-[span_3] grid-rows-subgrid'
				variants={fadeIn('up', 'spring', index * 0.75, 0.8)}>
				<Tilt
					options={{
						max: 20,
						scale: 1.05,
						speed: 450,
						reverse: true,
					}}
					className='grid row-[span_3] grid-rows-subgrid content-start grid-content-start w-full h-full p-5 rounded-2xl bg-card-bg shadow-card'>
					<div className='relative w-full aspect-[330_/_230] transition hover:contrast-75'>
						<Link
							className='h-full w-full cursor-pointer rounded-2xl '
							to={site_link}
							target='_blank'>
							<img
								src={image}
								alt={name}
								className='h-full w-full rounded-2xl object-cover'
							/>
						</Link>

						<div className='card-img_hover absolute top-0 right-0 m-3 flex justify-end gap-1'>
							<Link
								to={source_code_link}
								target='_blank'
								className='black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition hover:scale-110'>
								<img src={github} alt='github' className='h-1/2 w-1/2 object-contain' />
							</Link>
						</div>
					</div>
					<div className='mt-5'>
						<h3
							className='text-[24px] font-bold'
							style={{ color: 'var(--text-heading)' }}>
							{name}
						</h3>
						<p className='mt-2 text-[14px]' style={{ color: 'var(--text-on-card)' }}>
							{description[lang]}
						</p>
					</div>
					<div className='mt-4 flex flex-wrap items-end gap-3 cursor-pointer'>
						{tags.map(tag => (
							<div
								key={tag.name}
								className='rounded-2xl px-1.5 py-0.5 transition-colors bg-bg-tag hover:bg-bg-tag-hover'>
								<p className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
							</div>
						))}
					</div>
				</Tilt>
			</motion.div>
		)
	},
)

const Works: FC = memo(() => {
	const { lang, translations } = useLang()

	return (
		<>
			<motion.div variants={textVariant(0)}>
				<p className={styles.sectionSubText}>{translations[lang].works.my_work}</p>
				<h2 className={`${styles.sectionHeadText} text-text-heading`}>
					{translations[lang].works.projects}
				</h2>
			</motion.div>

			<div className='flex w-full'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 max-w-3xl text-lg leading-[30px] text-secondary'>
					{translations[lang].works.description}
				</motion.p>
			</div>

			<div className='mt-20 w-full grid grid-cols-[repeat(auto-fit,minmax(min(320px,80%),1fr))] gap-x-6'>
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	)
})

export default SectionWrapper(Works, 'works')
