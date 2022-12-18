import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './PhoneHome.css'
import axios from 'axios'

function PhoneHome() {
	const [phones, setPhones] = useState([])

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dienthoai').then((response) => {
			setPhones(response.data)
			console.log(response.data)
		})
	}, [])

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
									{phone.giadienthoai}đ
								</p>
								<button className='product-buynow'>
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
