/// <reference types="vite-plugin-svgr/client" />
import { FC, memo } from 'react'
import Theme from '../../assets/theme.svg?react'
import useTheme from '../../hooks/useTheme'

// TODO MAKE THEME MANAGER
const ChangeTheme: FC = memo(() => {
	const { theme, setTheme } = useTheme()

	const changeThemeHandler = () => {
		if (theme == 'dark') setTheme('light')
		else setTheme('dark')
	}

	return (
		<div
			onClick={changeThemeHandler}
			className='p-0.5 cursor-pointer hover:bg-slate-500/30 rounded'>
			<Theme className='size-8' style={{ color: 'white' }} />
		</div>
	)
})

export default ChangeTheme
