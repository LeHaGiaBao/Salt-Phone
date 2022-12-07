import React, {useEffect} from 'react'
import NewProduct from '../components/NewProduct/NewProduct'
import ListPhone from '../containers/ListPhone'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import Slider from '../layouts/Slider/Slider'

function Home(props) {
	useEffect(() => {
		document.title = 'Salt Phone'
	}, 1)

	return (
		<div>
			<Header />
			<div className='mt-24'>
				<Slider />
			</div>
			{/* <div className='m mb-16'>
				<ListPhone />
				<NewProduct />
			</div> */}
			<Footer />
		</div>
	)
}

export default Home
