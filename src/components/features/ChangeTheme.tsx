import Theme from '../../assets/theme.svg?react'
import { FC, memo } from 'react'
import { useTheme } from '../../hooks'

const ChangeTheme: FC = memo(() => {
	const { theme, setTheme } = useTheme()

	const changeThemeHandler = () => {
		if (theme === 'dark') setTheme('light')
		else setTheme('dark')
	}

	return (
		<div
			onClick={changeThemeHandler}
			className='p-0.5 cursor-pointer hover:bg-slate-500/30 rounded'>
			<Theme className='size-8' style={{ color: 'var(--icon-color)' }} />
		</div>
	)
})

export default ChangeTheme
