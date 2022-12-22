import React, {useState} from 'react'
import './ProductCart.css'
import {useDispatch} from 'react-redux'
import {HiOutlineTrash} from 'react-icons/hi'
import {
	removeFromCart,
	addItemQuantity,
	subtractItemQuantity,
} from '../../redux/Reducer/CartReducer'

function ProductCartItem(props) {
	const dispatch = useDispatch()

	const {hinhanh, tendienthoai, giadienthoai} = props

	return (
		<div className='products'>
			<div className='product'>
				<table>
					<tbody>
						<tr>
							<td>
								<img src={hinhanh} alt='' />
								<div>
									<p>{tendienthoai}</p>
								</div>
							</td>
							<td>
								<span>{giadienthoai}đ</span>
							</td>
							<td>
								<div>
									<button
										onClick={() =>
											dispatch(
												subtractItemQuantity(props)
											)
										}>
										-
									</button>
									{/* <span>{quantity}</span> */}
									<button
										onClick={() =>
											dispatch(addItemQuantity(props))
										}>
										+
									</button>
								</div>
							</td>
							<td>
								<span>
									{giadienthoai.toLocaleString('it-IT', {
										style: 'currency',
										currency: 'VND',
									})}
								</span>
							</td>
							<td>
								<button
									onClick={() =>
										dispatch(removeFromCart(props))
									}>
									<HiOutlineTrash />
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ProductCartItem
