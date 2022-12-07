import React, {useEffect, useState} from 'react'
import './SignUp.css'
import Form from '../../assets/image/Form.png'
import {BsEyeFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function SignUp() {
	useEffect(() => {
		document.title = 'Đăng ký'
	}, 1)

	const [passwordShow, setPasswordShow] = useState(false)

	const togglePasswordVisibility = () => {
		setPasswordShow(passwordShow ? false : true)
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
					<form action='' className='m-t-4'>
						<div className='label-input'>
							<label htmlFor=''>Số điện thoại</label>
							<br />
							<input
								type='text'
								name=''
								id=''
								className='p-t-16px input-box p-b-8px'
							/>
							<div className='label-input_line'></div>
						</div>

						<div className='label-input p-t-40px'>
							<label htmlFor=''>Mật khẩu</label>
							<div className='input-password'>
								<input
									type={passwordShow ? 'text' : 'password'}
									className='p-t-16px input-box'
								/>
								<BsEyeFill
									onClick={togglePasswordVisibility}
									className='ShowPassword'
								/>
							</div>
							<div className='label-input_line'></div>
						</div>
					</form>

					<Link to='/SignIn'>
						<button className='sign-in-btn bg-color-primary m-t-14'>
							Đăng ký
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SignUp
