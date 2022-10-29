import React, {useState} from 'react'
import Form from '../assets/image/Form.png'
import google from '../assets/image/google.png'
import {BsEyeFill} from 'react-icons/bs'

function SignInForm() {
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
					<h2 className='signIn-form_title'>Đăng nhập</h2>
					{/* Điền thông tin */}
					<form action='' className='p-t-12'>
						<div className='label-input'>
							<label htmlFor=''>Số điện thoại</label>
							<br />
							<input
								type='text'
								name=''
								id=''
								placeholder='0967xxxxxx'
								className='p-t-16px input-box p-b-8px'
							/>
							<div className='label-input_line'></div>
						</div>

						<div className='label-input p-t-40px'>
							<label htmlFor=''>Mật khẩu</label>
							<input
								type={passwordShow ? 'text' : 'password'}
								placeholder='************'
								className='p-t-16px input-box'
							/>
							<BsEyeFill
								onClick={togglePasswordVisibility}
								className='ShowPassword'
							/>
							<div className='label-input_line'></div>
						</div>
					</form>
					<div className='signIn-form_text p-t-24px'>
						Bạn quên mật khẩu?{' '}
						<a href='' className='signIn-form_text_recover-password'>
							Khôi phục ngay
						</a>
					</div>
					<button className='sign-in-btn bg-color-primary m-t-24px'>
						Đăng nhập
					</button>{' '}
					<br />
					<button className='sign-in-btn bg-color-blue-color m-t-24px'>
						Đăng ký
					</button>
					<div className='signIn-form_or m-t-24px'>
						<div className='signIn-form_or_line'></div>
						<p className='signIn-form_or_text'>Hoặc</p>
						<div className='signIn-form_or_line'></div>
					</div>
					<button className='sign-in-btn connect-google-btn m-t-24px'>
						<img
							src={google}
							alt=''
							className='signIn-form_google-icon'
						/>
						{''}
						<p className=''>Đăng nhập với Google</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SignInForm
