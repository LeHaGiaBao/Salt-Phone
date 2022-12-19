import React, {useEffect} from 'react'
import ProductCart from '../components/ProductCart/ProductCart'
import ViewCart from '../components/ViewCart'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'

function Cart() {
	useEffect(() => {
		document.title = 'Giỏ hàng'
	}, 1)

	return (
		<div>
			<Header />
			<ProductCart />
			{/* <ViewCart /> */}
			<Footer />
		</div>
	)
}

export default Cart
