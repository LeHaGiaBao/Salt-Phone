import React from 'react'
import './PhoneItem.css'

function PhoneItem(props) {
	return (
		<div className='product'>
			<img src={props.hinhanh} alt='' />
			<p className='product-newtag'>Mới</p>
			<h2 className='product-name'>{props.tendienthoai}</h2>
			<p className='product-price'>{props.giadienthoai}</p>
			<button className='product-buynow'>Mua ngay</button>
			<a className='product-more' href='#'>
				Tìm hiểu thêm &gt;
			</a>
		</div>
	)
}

export default PhoneItem
