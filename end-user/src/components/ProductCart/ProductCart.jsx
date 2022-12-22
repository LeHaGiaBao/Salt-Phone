import React, {useState} from 'react'
import './ProductCart.css'
import {useSelector} from 'react-redux'
import ProductCartItem from './ProductCartItem'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {buyProduct} from '../../redux/Reducer/CartReducer'

function ProductCart() {
	const {cartItems, totalAmount, quantity} = useSelector((state) => state.cart)

	const [cart, setCart] = useState({
		diachigiaohang: '',
		makhachhang: '',
		tongsotien: '',
	})

	const [cartDetail, setCartDetail] = useState({
		madonhang: '',
		masanpham: '',
		soluong: '',
	})

	const {madonhang, masanpham, soluong} = cartDetail

	const {diachigiaohang, makhachhang, tongsotien} = cart

	const handleChange = (e) => {
		setCart({...cart, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const history = useNavigate()
	const dispatch = useDispatch()

	const handleSubmitButton = () => {
		cart.tongsotien = totalAmount

		console.log(cart)
		if (cart.makhachhang !== '' && cart.diachigiaohang !== '') {
			axios.post('http://127.0.0.1:8000/api/donhang', cart)
				.then((response) => console.log(response))
				.catch((error) => console.log(error))

			console.log(cartItems)

			// axios.post('http://127.0.0.1:8000/api/chitietdonhang', cartItems)
			// 	.then((response) => console.log(response))
			// 	.catch((error) => console.log(error))

			// setCartDetail((cartDetail) => (cartDetail = cartItems))
			// console.log(cartDetail)

			// console.log(cartDetail)

			// console.log(cartItems)
			history('/')
			Swal.fire('Mua hàng thành công!', '', 'success')
			dispatch(buyProduct())
		} else {
			Swal.fire({
				icon: 'warning',
				text: 'Có trường vẫn chưa được nhập',
			})
		}
	}

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
			<form className='details' onSubmit={handleSubmit}>
				<div className='address'>
					<div>
						<span>Giao tới</span>
					</div>
					<p>
						<b>Mã khách hàng: </b>
						<input
							type='text'
							name='makhachhang'
							value={cart.makhachhang}
							onChange={handleChange}
							className='ml-5 w-60	 border-solid'
						/>
					</p>
					<hr />
					<p className='mt-5'>
						<b>Địa chỉ: </b>
						<input
							type='text'
							name='diachigiaohang'
							value={cart.diachigiaohang}
							onChange={handleChange}
							className='ml-5 w-80'
						/>
					</p>
				</div>
				<div className='totalprice'>
					<div>
						<p>Tổng số sản phẩm: {quantity}</p>
						<span>Tổng thanh toán: </span>
						<span>{totalAmount}đ</span>
					</div>
					<button type='submit' onClick={handleSubmitButton}>
						Mua hàng
					</button>
				</div>
			</form>
		</div>
	)
}

export default ProductCart
