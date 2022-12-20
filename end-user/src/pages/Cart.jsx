import React, {useEffect} from 'react'
import ProductCart from '../components/ProductCart/ProductCart'
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
			<Footer />
		</div>
	)
}

export default Cart
