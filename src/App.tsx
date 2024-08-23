import {
	createContext,
	useEffect,
	useState,
	FC,
	memo,
} from 'react'
import { BrowserRouter } from 'react-router-dom'

import type {
	AllowedLangs,
	ILangContext,
	IThemeContext,
	Theme,
} from './types'

import { MainLayout } from './layouts'
import { Main } from './pages'

import './index.scss'

export const LangContext = createContext<
	ILangContext | undefined
>(undefined)

export const themeContext = createContext<
	IThemeContext | undefined
>(undefined)

const App: FC = () => {
	const [theme, setTheme] = useState<Theme>('dark')
	const [lang, setLang] = useState<AllowedLangs>('en')

	useEffect(() => {
		const htmlStyles = document.documentElement.classList
		if (theme === 'dark') htmlStyles.add(theme)
		else htmlStyles.remove('dark')

		return () => {}
	}, [theme])

	return (
		<BrowserRouter>
			<LangContext.Provider value={{ lang, setLang }}>
				<themeContext.Provider value={{ theme, setTheme }}>
					<MainLayout>
						<Main />
					</MainLayout>
				</themeContext.Provider>
			</LangContext.Provider>
		</BrowserRouter>
	)
}

export default App
