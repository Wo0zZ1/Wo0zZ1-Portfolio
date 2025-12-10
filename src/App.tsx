import { createContext, useState, FC, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import type { AllowedLangs, ILangContext, IThemeContext, Theme } from './types'

import { MainLayout } from './layouts'
import { Main } from './pages'

import './index.scss'
import './variables.scss'

export const LangContext = createContext<ILangContext | undefined>(undefined)

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

const App: FC = () => {
	const [theme, setTheme] = useState<Theme>('dark')
	const [lang, setLang] = useState<AllowedLangs>('en')

	useEffect(() => {
		const htmlStyles = document.documentElement.classList

		if (theme === 'dark') {
			htmlStyles.add('dark')
			htmlStyles.remove('light')
		} else if (theme === 'light') {
			htmlStyles.add('light')
			htmlStyles.remove('dark')
		}
	}, [theme])

	return (
		<BrowserRouter>
			<LangContext.Provider value={{ lang, setLang }}>
				<ThemeContext.Provider value={{ theme, setTheme }}>
					<MainLayout>
						<Main />
					</MainLayout>
				</ThemeContext.Provider>
			</LangContext.Provider>
		</BrowserRouter>
	)
}

export default App
