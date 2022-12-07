import React, {useEffect, useState} from 'react'
import './ListProducts.css'
import axios from 'axios'

function ListProducts() {
	const [state, setState] = useState([])

	useEffect(() => {
		getData()
	}, 1)

	const getData = async () => {
		await axios.get('http://127.0.0.1:8000/api/dienthoai').then((res) => {
			setState()
		})
	}

	return (
		<div className='ListProducts'>
			<div className='products'></div>
			<a className='more' href='#'>
				Xem thêm sản phẩm &gt;
			</a>
		</div>
	)
}

export default ListProducts
