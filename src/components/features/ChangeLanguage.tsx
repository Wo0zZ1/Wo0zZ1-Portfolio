/// <reference types="vite-plugin-svgr/client" />
import Theme from '../../assets/icons/language.svg?react'

import { FC, memo, useCallback } from 'react'

import { useLang } from '../../hooks'

const ChangeLanguage: FC = memo(() => {
	const { lang, setLang } = useLang()

	const changeLanguageHandler = useCallback(() => {
		if (lang == 'en') setLang('ru')
		else setLang('en')
	}, [lang, setLang])

	return (
		<div
			onClick={changeLanguageHandler}
			className='p-0.5 cursor-pointer hover:bg-slate-500/30 rounded'>
			<Theme className='size-8' style={{ color: 'var(--icon-color)' }} />
		</div>
	)
})

export default ChangeLanguage
