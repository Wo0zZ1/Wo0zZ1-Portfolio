import { FC, memo } from 'react'
import Hero from '../Hero'
import Navbar from '../Navbar'

export const Header: FC = memo(() => {
	return (
		<div
			className='bg-cover bg-no-repeat bg-center'
			style={{ backgroundImage: 'var(--bg-hero)' }}>
			<Navbar />
			<Hero />
		</div>
	)
})
