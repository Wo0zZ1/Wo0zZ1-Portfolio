import { useContext } from 'react'
import { themeContext } from '../App'

import type { IThemeContext } from '../types'

const useTheme = (): IThemeContext => {
	const data = useContext(themeContext)
	if (typeof data === 'undefined')
		throw Error('Отсутствует тема')
	return data
}
export default useTheme
