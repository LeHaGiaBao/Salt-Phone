import React from 'react'
import './ProductCart.css'
import {useSelector} from 'react-redux'
import ProductCartItem from './ProductCartItem'

function ProductCart() {
	const {cartItems, totalAmount, quantity} = useSelector((state) => state.cart)

	return (
		<div className='ProductCart'>
			<p>
				<b>Giỏ hàng</b>
			</p>
			<div className='titles'>
				<table>
					<tbody>
						<tr>
							<td>
								{/* <input type='checkbox' /> */}
								<span>Sản phẩm</span>
							</td>
							<td>
								<span>Đơn giá</span>
							</td>
							<td>
								<span>Số lượng</span>
							</td>
							<td>
								<span>Thành tiền</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			{cartItems.map((item) => (
				<ProductCartItem key={item.id} {...item} />
			))}
			<div className='details'>
				<div className='address'>
					<div>
						<span>Giao tới</span>
						<a href='#'>Thay đổi</a>
					</div>
					<p>
						<b>Mỹ Duyên | 0966778899</b>
					</p>
					<p>
						KTX Khu A, ĐHQG TP.HCM, phường Linh Trung, Tp. Thủ Đức, Tp.
						HCM
					</p>
				</div>
				<div className='totalprice'>
					<div>
						<p>Tổng số sản phẩm: {quantity}</p>
						<span>Tổng thanh toán: </span>
						<span>{totalAmount}đ</span>
					</div>
					<button>Mua hàng</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCart
