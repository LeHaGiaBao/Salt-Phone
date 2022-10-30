import React, {useState} from 'react'
import Form from '../../assets/image/Form.png'
import {BiArrowBack} from 'react-icons/bi'
import {BsEyeFill} from 'react-icons/bs'


function NewPassword() {
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
						<div className='label-input p-t-40px'>
							<label htmlFor=''>Mật khẩu mới</label>
							<div className="input-password">
								<input
									type={passwordShow ? 'text' : 'password'}
									placeholder='************'
									className='p-t-16px input-box'
								/>
								<BsEyeFill
									onClick={togglePasswordVisibility}
									className='ShowPassword'
								/>
							</div>
							<div className='label-input_line'></div>
						</div>

						<div className='label-input p-t-40px'>
							<label htmlFor=''>Nhập lại mật khẩu</label>
							<div className="input-password">
								<input
									type={passwordShow ? 'text' : 'password'}
									placeholder='************'
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
					<br />
					<button className='sign-in-btn bg-color-blue-color m-t-8'>
						Lưu mật khẩu
					</button>

					<button className="back-to-sign-in sign-in-btn bg-color-primary m-t-24px">
                        <div className='arrowback-icon'><BiArrowBack /></div>
                        <p className="">Quay lại đăng nhập</p>
                    </button>
				</div>
			</div>
		</div>
	)
}

export default NewPassword
