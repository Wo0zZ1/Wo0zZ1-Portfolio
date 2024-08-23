type AllowedLangs = 'ru' | 'en'
type itemForLang<T> = { [P in AllowedLangs]: T }

interface ILangContext {
	lang: AllowedLangs
	setLang: React.Dispatch<React.SetStateAction<AllowedLangs>>
}

type Theme = 'dark' | 'light'

interface IThemeContext {
	theme: Theme
	setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export type {
	AllowedLangs,
	itemForLang,
	ILangContext,
	Theme,
	IThemeContext,
}
