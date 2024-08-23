import { FC, memo } from 'react'

import { LogoIcon } from '../shared'

import useLang from '../../hooks/useLang'

const LogoWithText: FC = memo(() => {
	const { lang, translations } = useLang()

	return (
		<>
			<LogoIcon />
			<p className='flex cursor-pointer text-[18px] font-bold text-white'>
				{translations[lang].hero.hello[1]}&nbsp;
				<span className='hidden sm:block'>| Wo0zZ1</span>
			</p>
		</>
	)
})

export default LogoWithText
