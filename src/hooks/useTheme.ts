import { useContext } from 'react'
import { ThemeContext } from '../App'

import type { IThemeContext } from '../types'

export const useTheme = (): IThemeContext => {
	const data = useContext(ThemeContext)
	if (typeof data === 'undefined') throw Error('Отсутствует тема')
	return data
}
