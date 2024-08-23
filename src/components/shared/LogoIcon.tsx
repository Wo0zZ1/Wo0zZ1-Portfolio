import { FC, memo } from 'react'

import { logo } from '../../assets'

const LogoIcon: FC = memo(() => {
	return (
		<img
			className='h-9 w-9 object-contain'
			src={logo}
			alt='logo'
		/>
	)
})

export default LogoIcon
