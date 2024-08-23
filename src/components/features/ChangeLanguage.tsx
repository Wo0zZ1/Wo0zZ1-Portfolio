/// <reference types="vite-plugin-svgr/client" />
import { FC, memo, useCallback } from 'react'

import Theme from '../../assets/language.svg?react'

import useLang from '../../hooks/useLang'

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
			<Theme className='size-8' style={{ color: 'white' }} />
		</div>
	)
})

export default ChangeLanguage
