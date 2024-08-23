import { useContext } from 'react'

import { LangContext } from '../App'

import translationsJSON from '../translations/translations.json'

const useLang = () => {
	const data = useContext(LangContext)
	if (typeof data === 'undefined')
		throw Error('Отсутствует язык')
	const translations = translationsJSON
	return { ...data, translations }
}
export default useLang
