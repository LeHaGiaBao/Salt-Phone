import React, {useState} from 'react'
import './RecoverPasswordOTP.css'
import Form from '../../assets/image/Form.png'

function RecoverPasswordOTP() {
	return (
		<div className='screen'>
			<div className='container m-t-8'>
				<div className='signIn-img'>
					<img src={Form} alt='' />
				</div>

				<div className='signIn-form'>
					{/* Tiêu đề */}
					<h2 className='signIn-form_title'>Quên mật khẩu</h2>

					{/* Điền thông tin */}
					<form action='' className='p-t-12'>
						<div className='label-input'>
							<label htmlFor=''>Nhập mã OTP</label>
							<br />
						</div>

                        <div className="OTP-input p-t-12">
                            <div className="OTP-input_character"></div>
                            <div className="OTP-input_character"></div>
                            <div className="OTP-input_character"></div>
                            <div className="OTP-input_character"></div>
                            <div className="OTP-input_character"></div>
                            <div className="OTP-input_character"></div>
                        </div>
					</form>

                    <div className="resend-OTP p-t-12">
                        Gửi lại mã OTP
                    </div>

					<button className='sign-in-btn bg-color-blue-color m-t-14'>
						Lấy mật khẩu
					</button>
				</div>
			</div>
		</div>
	)
}

export default RecoverPasswordOTP
