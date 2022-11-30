import React from 'react'
import ProductInformation from '../components/ProductInformation/ProductInformation'
import Footer from '../containers/Footer/Footer'
import Header from '../containers/Header/Header'

function ProductInfo(props) {
	return (
		<div>
			<Header />
			<div className='mt-32'>
				<ProductInformation />
			</div>
			<Footer />
		</div>
	)
}

export default ProductInfo
