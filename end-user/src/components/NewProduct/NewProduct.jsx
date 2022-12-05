import React, {useState, useEffect} from 'react'
import './NewProduct.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function NewProduct() {
	const [phones, setPhones] = useState([])

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dienthoai').then((response) => {
			setPhones(response.data)
		})
	}, [])

	return (
		<div className='NewProduct mb-20'>
			<h1 className='title'>SẢN PHẨM KINH DOANH</h1>
			<br />
			<div className='products'>
				{phones.map((phone) => {
					return (
						<div className='product'>
							<img src={phone.hinhanh} alt='' />
							<p className='product-newtag'>Mới</p>
							<h2 className='product-name'>{phone.tendienthoai}</h2>
							<p className='product-price'>{phone.giadienthoai}</p>
							<button className='product-buynow'>Mua ngay</button>
							<a
								className='product-more'
								href={`/ProductInfo/${phone.id}`}>
								Tìm hiểu thêm &gt;
							</a>
						</div>
					)
				})}
			</div>
			<a className='more' href='/ListPhone'>
				Xem thêm sản phẩm &gt;
			</a>
		</div>
	)
}

export default NewProduct
