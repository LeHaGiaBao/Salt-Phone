import React from 'react'
import './TopAccessory.css'

function TopAccessory(props) {
	return (
		<div className='NewProduct'>
			<h1 className='title'>TOP PHỤ KIỆN HOT</h1>
			<div className='products'>
				<div className='product'>
					<img
						src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000'
						alt=''
					/>
					<p className='product-newtag'>Mới</p>
					<h2 className='product-name'>AirPods Pro MagSafe Charge</h2>
					<p className='product-price'>5.190.000đ</p>
					<button className='product-buynow'>Mua ngay</button>
					<a className='product-more' href='#'>
						Tìm hiểu thêm &gt;
					</a>
				</div>
				<div className='product'>
					<img
						src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000'
						alt=''
					/>
					<p className='product-newtag'>Mới</p>
					<h2 className='product-name'>OPPO ENCO Air 2 Pro</h2>
					<p className='product-price'>1.250.000đ</p>
					<button className='product-buynow'>Mua ngay</button>
					<a className='product-more' href='#'>
						Tìm hiểu thêm &gt;
					</a>
				</div>
				<div className='product'>
					<img
						src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000'
						alt=''
					/>
					<p className='product-newtag'>Mới</p>
					<h2 className='product-name'>AirPods Pro 2nd MagSafe Charge</h2>
					<p className='product-price'>6.990.000đ</p>
					<button className='product-buynow'>Mua ngay</button>
					<a className='product-more' href='#'>
						Tìm hiểu thêm &gt;
					</a>
				</div>
				<div className='product'>
					<img
						src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000'
						alt=''
					/>
					<p className='product-newtag'>Mới</p>
					<h2 className='product-name'>AirPods Pro MagSafe Charge</h2>
					<p className='product-price'>5.190.000đ</p>
					<button className='product-buynow'>Mua ngay</button>
					<a className='product-more' href='#'>
						Tìm hiểu thêm &gt;
					</a>
				</div>
			</div>
			<a className='more' href='#'>
				Xem thêm sản phẩm &gt;
			</a>
		</div>
	)
}

export default TopAccessory
