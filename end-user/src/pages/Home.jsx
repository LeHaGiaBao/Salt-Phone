import React from 'react'
import Header from '../containers/Header/Header'
import Slider from '../containers/Slider/Slider'
import NewProduct from '../components/NewProduct/NewProduct'
import BestSellerProducts from '../components/BestSellerProducts/BestSellerProducts'
import TopAccessory from '../components/TopAccessory/TopAccessory'

function Home() {
	return (
		<div>
			<Header />
			<Slider />
			<NewProduct />
			<BestSellerProducts />
			<TopAccessory />
		</div>
	)
}

export default Home
