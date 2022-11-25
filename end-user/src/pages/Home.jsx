import React from 'react'
import Header from '../containers/Header/Header'
import Slider from '../containers/Slider/Slider'
import NewProduct from '../components/NewProduct/NewProduct'
import BestSellerProducts from '../components/BestSellerProducts/BestSellerProducts'
import TopAccessory from '../components/TopAccessory/TopAccessory'
import Footer from '../containers/Footer/Footer'
import PurchaseHistory from '../pages/PurchaseHistory/PurchaseHistory'

function Home() {
	return (
		<div>
			<PurchaseHistory></PurchaseHistory>
		</div>
	)
}

export default Home
