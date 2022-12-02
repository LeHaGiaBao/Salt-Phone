import React, {useEffect, useState} from 'react'
import './SignIn.css'
import Form from '../../assets/image/Form.png'
import google from '../../assets/image/google.png'
import {BsEyeFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function SignInForm() {
	const [passwordShow, setPasswordShow] = useState(false)

	const togglePasswordVisibility = () => {
		setPasswordShow(passwordShow ? false : true)
	}

	useEffect(() => {
		document.title = 'Sign In'
	}, 1)

	return (
		<div className='screen'>
			<div className='container m-t-4'>
				<a className='signIn-img'>
					<img src={Form} alt='' />
				</a>

				<div className='signIn-form'>
					{/* Tiêu đề */}
					<h2 className='signIn-form_title'>Đăng nhập</h2>
					{/* Điền thông tin */}
					<form action='' className='m-t-4'>
						<div className='label-input'>
							<label htmlFor=''>Email</label>
							<br />
							<input
								type='text'
								name=''
								id=''
								// placeholder='0967xxxxxx'
								className='p-t-16px input-box p-b-8px'
							/>
							<div className='label-input_line'></div>
						</div>

						<div className='label-input p-t-40px'>
							<label htmlFor=''>Mật khẩu</label>
							<div className='input-password'>
								<input
									type={passwordShow ? 'text' : 'password'}
									// placeholder='************'
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
					{/* <div className='signIn-form_text p-t-24px'>
						Bạn quên mật khẩu?{' '}
						<Link to='/RecoverPassword'>
							<a
								href=''
								className='signIn-form_text_recover-password'>
								Khôi phục ngay
							</a>
						</Link>
					</div> */}
					<Link to='/Dashboard'>
						<button className='sign-in-btn bg-color-blue-color mt-16'>
							Đăng nhập
						</button>{' '}
					</Link>
					<br />
				</div>
			</div>
		</div>
	)
}

export default SignInForm
