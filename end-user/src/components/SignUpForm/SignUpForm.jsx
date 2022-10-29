import React, {useState} from 'react'
import './SignUpForm.css'
import Form from '../../assets/image/Form.png'
import {BsEyeFill} from 'react-icons/bs'

function SignUpForm() {
	const [passwordShow1, setPasswordShow1] = useState(false)
	const [passwordShow2, setPasswordShow2] = useState(false)

	const togglePasswordVisibility1 = () => {
		setPasswordShow1(passwordShow1 ? false : true)
	}
	const togglePasswordVisibility2 = () => {
		setPasswordShow2(passwordShow2 ? false : true)
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
							<label htmlFor=''>Email</label>
							<br />
							<input
								type='email'
								placeholder='abc@gmail.com'
								className='p-t-16px input-box '
							/>
							<div className='label-input_line'></div>
						</div>

						<div className='label-input p-t-40px'>
							<label htmlFor=''>Mật khẩu</label>
							<br />
							<input
								type={passwordShow1 ? 'text' : 'password'}
								placeholder='Nhapmatkhau'
								className='p-t-16px input-box '
							/>
							<BsEyeFill
								onClick={togglePasswordVisibility1}
								className='ShowPassword'
							/>
							<div className='label-input_line'></div>

							<input
								type={passwordShow2 ? 'text' : 'password'}
								placeholder='Nhaplaimatkhau'
								className='p-t-16px input-box m-t-24px '
							/>
							<BsEyeFill
								onClick={togglePasswordVisibility2}
								className='ShowPassword'
							/>
							<div className='label-input_line'></div>
						</div>
					</form>

					<button className='sign-in-btn bg-color-primary m-t-14'>
						Đăng ký
					</button>
				</div>
			</div>
		</div>
	)
}

export default SignUpForm
