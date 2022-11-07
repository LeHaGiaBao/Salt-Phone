import React from 'react'
import './ProductCart.css'
import {HiOutlineTrash} from 'react-icons/hi'

function ProductCart() {
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
								<input type='checkbox' />
								<span>Tất cả (3 sản phẩm)</span>
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
							<td>
								<HiOutlineTrash />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='products'>
				<div className='product'>
					<table>
						<tbody>
							<tr>
								<td>
									<input type='checkbox' />
									<img
										src='https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg'
										alt=''
									/>
									<div>
										<p>Apple iPhone 14 Plus</p>
										<p>128GB, Purple</p>
									</div>
								</td>
								<td>
									<span>29.999.000đ</span>
								</td>
								<td>
									<div>
										<button>-</button>
										<span>1</span>
										<button>+</button>
									</div>
								</td>
								<td>
									<span>29.999.000đ</span>
								</td>
								<td>
									<HiOutlineTrash />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='product'>
					<table>
						<tbody>
							<tr>
								<td>
									<input type='checkbox' />
									<img
										src='https://tainghe.com.vn/media/lib/21-10-2021/apple-airpods-3rd-generation-2021-14.png'
										alt=''
									/>
									<div>
										<p>AirPods 3 Wireless...</p>
										<p>White</p>
									</div>
								</td>
								<td>
									<span>4.490.000đ</span>
								</td>
								<td>
									<div>
										<button>-</button>
										<span>2</span>
										<button>+</button>
									</div>
								</td>
								<td>
									<span>8.980.000đ</span>
								</td>
								<td>
									<HiOutlineTrash />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
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
						<p>Tổng số sản phẩm: 3</p>
						<span>Tổng thanh toán: </span>
						<span>38.979.000đ</span>
					</div>
					<button>Mua hàng</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCart
