import React from 'react'
import SearchPhone from '../components/SearchPhone/SearchPhone'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'

function Search(props) {
	return (
		<>
			<Header />
			<div className='mt-48'>
				<SearchPhone />
			</div>
			<Footer />
		</>
	)
}

export default Search
