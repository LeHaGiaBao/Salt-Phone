import React from 'react'
import Form from '../assets/image/Form.png'
import google from '../assets/image/google.png'

function SignInForm() {
	return (
		<div className="screen">
			<div className='container'>
				<div className="signIn-img">
					<img src={Form} alt="" />
				</div>

				<div className="signIn-form">
					{/* Tiêu đề */}
					<h2 className="signIn-form_title">Đăng nhập</h2>

					{/* Điền thông tin */}
					<form action="" className='p-t-12'>
						<div className="label-input">
							<label htmlFor="">Số điện thoại</label><br/>
							<input type="text" name="" id="" placeholder='0967xxxxxx'className='p-t-16px'/>
							<div className="label-input_line"></div>
						</div>

						<div className="label-input p-t-40px">
							<label htmlFor="">Mật khẩu</label><br/>
							<input type="password" placeholder='************'className='p-t-16px'/>
							<div className="label-input_line"></div>
						</div>
					</form>

					<p className="signIn-form_text">
						Bạn quên mật khẩu? <a href="" className="signIn-form_text_recover-password">Khôi phục ngay</a>
					</p>

					<button className="sign-in-btn">Đăng nhập</button> <br/>
					<button className="sign-in-btn">Đăng ký</button>


					<div className="signIn-form_or">
						<div className='signIn-form_or_line'></div>
						Hoặc
						<div className='signIn-form_or_line'></div>
					</div>

					<button className="sign-in-btn">
						<img src={google} alt="" className='signIn-form_google-icon'/> 
						{""}
						Đăng nhập với Google
					</button>
					
				</div>
			</div>
		</div>
	)
}

export default SignInForm
