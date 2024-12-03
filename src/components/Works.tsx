import { FC, memo } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { SectionWrapper } from '../hocs'

import { github } from '../assets'

import { projects } from '../constants'
import { IProject } from '../constants'

import useLang from '../hooks/useLang'

import { fadeIn, textVariant } from '../utils'

import { styles } from '../styles'
import { Link } from 'react-router-dom'

const ProjectCard: FC<IProject & { index: number }> = memo(
	({
		index,
		name,
		description,
		tags,
		image,
		source_code_link,
		site_link,
	}) => {
		const { lang } = useLang()

		return (
			<>
				<motion.div
					variants={fadeIn('up', 'spring', index * 0.75, 0.8)}>
					<Tilt
						options={{
							max: 20,
							scale: 1.05,
							speed: 450,
							reverse: true,
						}}
						className='w-full rounded-2xl bg-tertiary p-5 shadow-card sm:w-[360px]'>
						{/* TODO edit hover effect */}
						<div className='relative h-[230px] w-full transition hover:contrast-75'>
							<Link
								className='z-50 h-full w-full cursor-pointer rounded-2xl'
								to={site_link}
								target='_blank'>
								<img
									src={image}
									alt={name}
									className='h-full w-full rounded-2xl object-cover'
								/>
							</Link>

							<div className='card-img_hover absolute top-0 right-0 m-3 flex justify-end gap-1'>
								{/* TODO use map */}
								<div
									onClick={() =>
										window.open(source_code_link, '_blank')
									}
									className='black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition hover:scale-110'>
									<img
										src={github}
										alt='github'
										className='h-1/2 w-1/2 object-contain'
									/>
								</div>
							</div>
						</div>

						<div className='mt-5'>
							<h3 className='text-[24px] font-bold text-white'>
								{name}
							</h3>
							<p className='mt-2 text-[14px] text-secondary'>
								{description[lang]}
							</p>
						</div>

						<div className='mt-4 flex cursor-pointer flex-wrap gap-3'>
							{tags.map(tag => (
								<div
									key={tag.name}
									className='rounded-2xl bg-slate-600/30 px-1.5 py-0.5 hover:bg-slate-600/50'>
									<p className={`text-[14px] ${tag.color}`}>
										#{tag.name}
									</p>
								</div>
							))}
						</div>
					</Tilt>
				</motion.div>
			</>
		)
	},
)

const Works: FC = memo(() => {
	const { lang, translations } = useLang()

	return (
		<>
			<motion.div variants={textVariant(0)}>
				<p className={styles.sectionSubText}>
					{translations[lang].works.my_work}
				</p>
				<h2 className={styles.sectionHeadText}>
					{translations[lang].works.projects}
				</h2>
			</motion.div>

			<div className='flex w-full'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 max-w-3xl font-[17px] leading-[30px] text-secondary'>
					{translations[lang].works.description}
				</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7'>
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	)
})

export default SectionWrapper(Works, 'works')
