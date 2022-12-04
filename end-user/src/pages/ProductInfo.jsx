import React, {useEffect} from 'react'
import ProductInformation from '../components/ProductInformation/ProductInformation'
import Footer from '../containers/Footer/Footer'
import Header from '../containers/Header/Header'

function ProductInfo(props) {
	useEffect(() => {
		document.title = 'Thông tin sản phẩm'
	}, 1)

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
