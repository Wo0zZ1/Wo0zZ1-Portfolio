import { memo } from 'react'
import { Header } from '../components/widgets/'

//TODO Типизировать
const MainLayout = memo(({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
})

export default MainLayout
