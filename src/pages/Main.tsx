import { FC, memo } from 'react'

import { About, Experience, Tech, Works, Contact } from '../components'

import { StarsCanvas } from '../components/canvas'

const Main: FC = memo(() => {
	return (
		<div className='relative z-0 bg-primary'>
			<About />
			<Experience />
			<Tech />
			<Works />
			{/* <Testimonials /> */}
			<div className='relative z-0'>
				<Contact />
				<StarsCanvas />
			</div>
		</div>
	)
})

export default Main
