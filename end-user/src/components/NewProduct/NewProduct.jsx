import React from 'react'
import './NewProduct.css'

function NewProduct() {
	return (
		<div className='NewProduct'>
			<h1 className='title'>SẢN PHẨM MỚI</h1>
			<div className='products'>
				<div className='product'>
					<img
						src='https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg'
						alt=''
					/>
					<p className='product-newtag'>Mới</p>
					<h2 className='product-name'>iPhone 14 Plus</h2>
					<p className='product-price'>27.990.000đ</p>
					<button className='product-buynow'>Mua ngay</button>
					<a className='product-more' href='#'>
						Tìm hiểu thêm &gt;
					</a>
				</div>
				<div className='product'>
					<img
						src='https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg'
						alt=''
					/>
					<p className='product-newtag'>Mới</p>
					<h2 className='product-name'>iPhone 14 Pro Max</h2>
					<p className='product-price'>33.990.000đ</p>
					<button className='product-buynow'>Mua ngay</button>
					<a className='product-more' href='#'>
						Tìm hiểu thêm &gt;
					</a>
				</div>
				<div className='product'>
					<img
						src='https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg'
						alt=''
					/>
					<p className='product-newtag'>Mới</p>
					<h2 className='product-name'>Samsung Galaxy Z Flip4 5G</h2>
					<p className='product-price'>27.990.000đ</p>
					<button className='product-buynow'>Mua ngay</button>
					<a className='product-more' href='#'>
						Tìm hiểu thêm &gt;
					</a>
				</div>
				<div className='product'>
					<img
						src='https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg'
						alt=''
					/>
					<p className='product-newtag'>Mới</p>
					<h2 className='product-name'>OPPO Reno8 Pro 5G</h2>
					<p className='product-price'>18.990.000đ</p>
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

export default NewProduct
