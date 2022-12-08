import React, {useEffect, useState} from 'react'
import './SignUp.css'
import Form from '../../assets/image/Form.png'
import {BsEyeFill} from 'react-icons/bs'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function SignUp() {
	const [customer, setCustomer] = useState({
		hovaten: '',
		email: '',
		sodienthoai: '',
		matkhau: '',
	})

	const {hovaten, email, sodienthoai, matkhau} = customer

	const handleChange = (e) => {
		setCustomer({...customer, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://127.0.0.1:8000/api/khachhang/', customer)
			.then((response) => console.log(response))
			.catch((error) => console.log(error))
	}

	const history = useNavigate()

	const handleSubmitButton = () => {
		if (
			customer.email !== '' &&
			customer.matkhau !== '' &&
			customer.sodienthoai !== '' &&
			customer.hovaten !== ''
		) {
			history('/')
			Swal.fire('Tạo tài khoản thành công!', '', 'success')
		} else {
			Swal.fire({
				icon: 'warning',
				text: 'Có trường vẫn chưa được nhập',
			})
		}
	}

	useEffect(() => {
		document.title = 'Đăng ký'
	}, 1)

	const [passwordShown, setPasswordShow] = useState(false)
	const togglePasswordVisiblity = () => {
		setPasswordShow(passwordShown ? false : true)
	}

	return (
		<div className='screen'>
			<div className='container m-t-4'>
				<div className='signIn-img'>
					<img src={Form} alt='' />
				</div>

				<div className='signIn-form'>
					{/* Tiêu đề */}
					<h2 className='signIn-form_title'>Đăng ký</h2>

					{/* Điền thông tin */}
					<form action='' className='m-t-4' onSubmit={handleSubmit}>
						<div className='label-input'>
							<label htmlFor=''>Họ và tên</label>
							<br />
							<input
								type='text'
								name='hovaten'
								value={customer.hovaten}
								onChange={handleChange}
								required
								className='p-t-16px input-box p-b-8px'
							/>
							<div className='label-input_line'></div>
						</div>

						<div className='label-input p-t-40px'>
							<label htmlFor=''>Email</label>
							<br />
							<input
								type='email'
								name='email'
								value={customer.email}
								onChange={handleChange}
								required
								className='p-t-16px input-box p-b-8px'
							/>
							<div className='label-input_line'></div>
						</div>

						<div className='label-input p-t-40px'>
							<label htmlFor=''>Mật khẩu</label>
							<div className='input-password'>
								<input
									type={passwordShown ? 'text' : 'password'}
									name='matkhau'
									required
									onChange={handleChange}
									value={customer.matkhau}
									className='p-t-16px input-box'
								/>
								<BsEyeFill
									onClick={togglePasswordVisiblity}
									className='ShowPassword'
								/>
							</div>
							<div className='label-input_line'></div>
						</div>

						<div className='label-input p-t-40px'>
							<label htmlFor=''>Số điện thoại</label>
							<br />
							<input
								type='text'
								name='sodienthoai'
								value={customer.sodienthoai}
								onChange={handleChange}
								required
								className='p-t-16px input-box p-b-8px'
							/>
							<div className='label-input_line'></div>
						</div>
						<button
							className='sign-in-btn bg-color-primary m-t-14'
							type='submit'
							onClick={handleSubmitButton}>
							Đăng ký
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp
