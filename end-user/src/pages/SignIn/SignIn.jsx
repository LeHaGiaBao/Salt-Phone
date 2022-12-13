import React, {useEffect, useState} from 'react'
import './SignIn.css'
import Form from '../../assets/image/Form.png'
import {BsEyeFill} from 'react-icons/bs'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

function SignInForm() {
	const [customer, setCustomer] = useState([])

	const [passwordShown, setPasswordShow] = useState(false)
	const togglePasswordVisiblity = () => {
		setPasswordShow(passwordShown ? false : true)
	}

	useEffect(() => {
		document.title = 'Sign In'
	}, 1)

	const [input, setInput] = useState({
		email: '',
		password: '',
	})

	const [data, setData] = useState(null)

	const history = useNavigate()

	const handleChange = (e) => {
		const {value, name} = e.target
		setInput({...input, [name]: value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleSignIn = () => {
		console.log(input)

		axios.get('http://127.0.0.1:8000/api/khachhang/').then((res) => {
			setCustomer(res.data)
		})

		if (input.email !== '' && input.password !== '') {
			customer.map((user) => {
				if (input.email === user.email && input.password === user.matkhau) {
					history('/UserInfo')
					Swal.fire({
						icon: 'success',
						title: 'Đăng nhập thành công',
						showConfirmButton: false,
						timer: 1500,
					})
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Tài khoản đăng nhập không đúng',
					})
				}
			})
		} else {
			Swal.fire({
				icon: 'warning',
				text: 'Có trường vẫn chưa được nhập',
			})
		}
	}

	return (
		<div className='screen'>
			<div className='container m-t-4'>
				<a className='signIn-img'>
					<img src={Form} alt='' />
				</a>

				<div className='signIn-form'>
					<h2 className='signIn-form_title'>Đăng nhập</h2>
					<form action='#' className='m-t-4' onSubmit={handleSubmit}>
						<div className='label-input'>
							<label htmlFor=''>Email</label>
							<br />
							<input
								type='text'
								name='email'
								value={input.email}
								onChange={handleChange}
								className='p-t-16px input-box p-b-8px'
							/>
							<div className='label-input_line'></div>
						</div>

						<div className='label-input p-t-40px'>
							<label htmlFor=''>Mật khẩu</label>
							<div className='input-password'>
								<input
									type={passwordShown ? 'text' : 'password'}
									name='password'
									required
									onChange={handleChange}
									value={input.password}
									className='p-t-16px input-box'
								/>
								<BsEyeFill
									onClick={togglePasswordVisiblity}
									className='ShowPassword'
								/>
							</div>
							<div className='label-input_line'></div>
						</div>
						<button
							className='sign-in-btn bg-color-primary m-t-24px'
							type='submit'
							onClick={handleSignIn}>
							Đăng nhập
						</button>

						<Link to='/SignUp'>
							<button className=' sign-in-btn bg-color-blue-color m-t-24px'>
								Đăng ký
							</button>
						</Link>
					</form>
					<br />
				</div>
			</div>
		</div>
	)
}

export default SignInForm
