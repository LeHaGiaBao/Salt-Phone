import React from 'react'
import {useDispatch} from 'react-redux'
import {
	removeFromCart,
	addItemQuantity,
	subtractItemQuantity,
} from '../redux/Reducer/CartReducer'
import {IoAddSharp, IoRemoveSharp} from 'react-icons/io5'

function CartItem(props) {
	const dispatch = useDispatch()
	const {hinhanh, tendienthoai, giadienthoai, quantity} = props

	return (
		<div className='cart-item'>
			<div className='product-image'>
				<img src={hinhanh} />
			</div>
			<div className='product-title'>
				<h2>{tendienthoai}</h2>
				<h2 className='product-price'>${giadienthoai}</h2>
				<button onClick={() => dispatch(removeFromCart(props))}>
					Remove from cart
				</button>
			</div>
			<div className='quantity'>
				<button onClick={() => dispatch(subtractItemQuantity(props))}>
					<IoRemoveSharp />
				</button>
				<p>{quantity}</p>
				<button onClick={() => dispatch(addItemQuantity(props))}>
					<IoAddSharp />
				</button>
			</div>
		</div>
	)
}

export default CartItem
