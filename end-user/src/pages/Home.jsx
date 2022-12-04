import React, {useEffect} from 'react'
import Header from '../containers/Header/Header'
import Slider from '../containers/Slider/Slider'
import NewProduct from '../components/NewProduct/NewProduct'
import BestSellerProducts from '../components/BestSellerProducts/BestSellerProducts'
import TopAccessory from '../components/TopAccessory/TopAccessory'
import Footer from '../containers/Footer/Footer'

function Home() {
	useEffect(() => {
		document.title = 'Salt Phone'
	}, 1)

	return (
		<div>
			<Header />
			<Slider />
			<NewProduct />
			{/* <BestSellerProducts />
			<TopAccessory /> */}
			<Footer />
		</div>
	)
}

export default Home
