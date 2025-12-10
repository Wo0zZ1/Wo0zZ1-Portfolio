import { useState, FC, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from '../constants'
import { menu, close } from '../assets'
import { ChangeTheme, ChangeLanguage } from './features/'
import { LogoWithText } from './entites'

import { useLang } from '../hooks'

import { styles } from '../styles'

const Navbar: FC = memo(() => {
	const { lang } = useLang()

	const [active, setActive] = useState<string>('')
	const [toggle, setToggle] = useState<boolean>(false)

	const onLogoClick = useCallback(() => {
		setActive('')
		window.scrollTo(0, 0)
	}, [setActive])

	const onNavClick = useCallback(
		(link: string) => {
			setActive(link)
		},
		[setActive],
	)

	return (
		<nav
			className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}>
			<div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
				{/* Logo */}
				<Link to='/' className='flex items-center gap-2' onClick={onLogoClick}>
					<LogoWithText />
				</Link>

				<div className='hidden h-full md:flex gap-8'>
					{/* Settings */}
					<div className='flex gap-5'>
						<ChangeLanguage />
						<ChangeTheme />
					</div>

					{/* Navigation */}
					<ul className='list-none flex flex-row items-center gap-10 '>
						{navLinks.map(link => (
							<li
								key={link.id}
								className={`${
									active === link.title[lang] ? 'text-white' : 'text-secondary'
								} cursor-pointer text-[18px] font-medium hover:text-white`}
								onClick={() => onNavClick(link.title.en)}>
								<a href={`#${link.id}`}>{link.title[lang]}</a>
							</li>
						))}
					</ul>
				</div>

				{/* Small devices */}
				<div className='flex flex-1 items-center justify-end md:hidden m'>
					<img
						src={toggle ? close : menu}
						alt='menu'
						className='h-[28px] w-[28px] cursor-pointer object-contain'
						onClick={() => setToggle(prev => !prev)}
					/>
					<div
						className={`${
							toggle ? 'flex' : 'hidden'
						} black-gradient min-w[140px] absolute right-0 top-20 z-10 mx-4 my-2 rounded-xl p-6`}>
						<ul className='flex list-none flex-col items-start justify-end gap-4'>
							{navLinks.map(link => (
								<li
									key={link.id}
									className={`${
										active === link.title[lang] ? 'text-white' : 'text-secondary'
									} font-poppins cursor-pointer text-[16px] font-medium`}
									onClick={() => {
										setActive(link.title[lang])
										setToggle(false)
									}}>
									<a href={`#${link.id}`}>{link.title[lang]}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
})

export default Navbar
