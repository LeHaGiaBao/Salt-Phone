import React from 'react'
import Form from '../assets/image/Form.png'
import {BiArrowBack} from 'react-icons/bi'

function SignInForm() {
	return (
		<div className="screen">
			<div className="container m-t-8">
				<div className="signIn-img">
					<img src={Form} alt="" />
				</div>

				<div className="signIn-form">
					{/* Tiêu đề */}
					<h2 className="signIn-form_title">Quên mật khẩu</h2>

					{/* Điền thông tin */}
					<form action="" className='p-t-12'>
						<div className="label-input">
							<label htmlFor="">Số điện thoại</label><br/>
							<input type="text" name="" id="" placeholder='0967xxxxxx'className='p-t-16px input-box p-b-8px'/>
							<div className="label-input_line"></div>
						</div>
					</form>

					<button className="sign-in-btn bg-color-blue-color m-t-8">Lấy mật khẩu</button> <br/>
                    
					<div className="signIn-form_or m-t-24px">
						<div className='signIn-form_or_line'></div>
						<p className="signIn-form_or_text">Hoặc</p>
						<div className='signIn-form_or_line'></div>
					</div>

					<button className="back-to-sign-in sign-in-btn bg-color-primary m-t-24px">
                        <div className='arrowback-icon'><BiArrowBack /></div>
                        <p className="">Quay lại đăng nhập</p>
                    </button>
				</div>
			</div>
		</div>
	)
}

export default SignInForm
