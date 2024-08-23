import { FC, memo } from 'react'
import Hero from '../Hero'
import Navbar from '../Navbar'

const Header: FC = memo(() => {
	return (
		<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
			<Navbar />
			<Hero />
		</div>
	)
})

export default Header
