import React from 'react'
import Brand from '../components/Brand/Brand'
import ListProducts from '../components/ListProducts/ListProducts'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'

function Phone() {
	return (
		<div>
			<Header />
			{/* <div className='mt-36'>
				<Brand />
			</div> */}
			<div className='mt-36'>
				<ListProducts />
			</div>
			<Footer />
		</div>
	)
}

export default Phone
