import React from 'react'
import Brand from '../components/Brand/Brand'
import ListProducts from '../components/ListProducts/ListProducts'
import NewProduct from '../components/NewProduct/NewProduct'
import Footer from '../containers/Footer/Footer'
import Header from '../containers/Header/Header'

function ListPhone(props) {
	return (
		<div>
			<Header />
			<div className='mt-20'>
				{/* <Brand />
				<ListProducts /> */}
				<NewProduct />
			</div>
			<Footer />
		</div>
	)
}

export default ListPhone
