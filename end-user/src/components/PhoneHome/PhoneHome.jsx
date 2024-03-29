import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './PhoneHome.css'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/Reducer/CartReducer'

function PhoneHome({id, tendienthoai, hinhanh, giadienthoai}) {
	const [phones, setPhones] = useState([])

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dienthoai').then((response) => {
			setPhones(response.data)
		})
	}, [])

	const dispatch = useDispatch()

	return (
		<div className='NewProduct'>
			<h1 className='title'>SẢN PHẨM BÁN</h1>
			<div className='products'>
				{phones.map((phone) => {
					if (phone.id <= 10) {
						return (
							<div className='product'>
								<img src={phone.hinhanh} alt='' />
								<p className='product-newtag'>Mới</p>
								<h2 className='product-name'>
									{phone.tendienthoai}
								</h2>
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
					}
				})}
			</div>
			<a className='more' href='/Phone'>
				Xem thêm sản phẩm &gt;
			</a>
		</div>
	)
}

export default PhoneHome
