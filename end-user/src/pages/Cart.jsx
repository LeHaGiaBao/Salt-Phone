import React, {useEffect} from 'react'
import CartList from '../components/CartList'
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

			{/* <CartList /> */}
			{/* <Footer /> */}
		</div>
	)
}

export default Cart
