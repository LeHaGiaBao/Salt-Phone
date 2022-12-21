import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './ListProducts.css'
import axios from 'axios'
import {addToCart} from '../../redux/Reducer/CartReducer'
import {useDispatch} from 'react-redux'

function ListProducts() {
	const [phones, setPhones] = useState([])

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dienthoai').then((response) => {
			setPhones(response.data)
		})
	}, [])

	const dispatch = useDispatch()

	return (
		<div className='NewProduct'>
			<h1 className='title'>SẢN PHẨM</h1>
			<div className='products'>
				{phones.map((phone) => {
					return (
						<div className='product'>
							<img src={phone.hinhanh} alt='' />
							<p className='product-newtag'>Mới</p>
							<h2 className='product-name'>{phone.tendienthoai}</h2>
							<p className='product-price'>
								{phone.giadienthoai.toLocaleString('it-IT', {
									style: 'currency',
									currency: 'VND',
								})}
							</p>
							<button
								className='product-buynow'
								onClick={() => {
									dispatch(addToCart(phone))
								}}>
								Mua ngay
							</button>
							<Link to={`/PhoneInfo/${phone.id}`}>
								<a className='product-more' href='#'>
									Tìm hiểu thêm &gt;
								</a>
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ListProducts
