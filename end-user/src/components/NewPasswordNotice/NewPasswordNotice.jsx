import React, {useState} from 'react'
import './NewPasswordNotice.css'
import Form from '../../assets/image/Form.png'
import {BiArrowBack} from 'react-icons/bi'
import {BsEyeFill} from 'react-icons/bs'

function NewPasswordNotice() {
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
			<div className='noti-text m-t-4'>
				Đã lưu mật khẩu mới! Đăng nhập lại ngay!
			</div>
			<div className='container m-t-4'>
				<div className='signIn-img'>
					<img src={Form} alt='' />
				</div>

				<div className='signIn-form'>
					{/* Tiêu đề */}
					<h2 className='signIn-form_title'>Đặt lại mật khẩu</h2>
					{/* Điền thông tin */}
					<form action='' className='m-t-4'>
						<div className='label-input p-t-40px'>
							<label htmlFor=''>Mật khẩu mới</label>
							<div className='input-password'>
								<input
									type={passwordShow1 ? 'text' : 'password'}
									placeholder='************'
									className='p-t-16px input-box'
								/>
								<BsEyeFill
									onClick={togglePasswordVisibility1}
									className='ShowPassword'
								/>
							</div>
							<div className='label-input_line'></div>
						</div>

						<div className='label-input p-t-40px'>
							<label htmlFor=''>Nhập lại mật khẩu</label>
							<div className='input-password'>
								<input
									type={passwordShow2 ? 'text' : 'password'}
									placeholder='************'
									className='p-t-16px input-box'
								/>
								<BsEyeFill
									onClick={togglePasswordVisibility2}
									className='ShowPassword'
								/>
							</div>
							<div className='label-input_line'></div>
						</div>
					</form>
					<br />
					<button className='sign-in-btn bg-color-blue-color m-t-8'>
						Lưu mật khẩu
					</button>

					<button className='back-to-sign-in sign-in-btn bg-color-primary m-t-24px'>
						<div className='arrowback-icon'>
							<BiArrowBack />
						</div>
						<p className=''>Quay lại đăng nhập</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default NewPasswordNotice
