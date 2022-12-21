import React, {useEffect} from 'react'
import PhoneHome from '../components/PhoneHome/PhoneHome'
import ProductCart from '../components/ProductCart/ProductCart'
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
			<div className='mt-16 mb-16'>
				<PhoneHome />
			</div>
			<Footer />
		</div>
	)
}

export default Home
