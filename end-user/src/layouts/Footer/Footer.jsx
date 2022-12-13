import React from 'react'
import './Footer.css'
import {BsTelephone} from 'react-icons/bs'
import {GoMail, GoLocation} from 'react-icons/go'

function Footer() {
	return (
		<footer>
			<div>
				<a href='/'>
					<b>SALTPHONE</b>
				</a>
			</div>
			<div>
				<ul>
					<li>
						<b className='title'>Sản phẩm</b>
					</li>
					<li>
						<a href='/Phone'>Điện thoại</a>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<b className='title'>Hổ trợ</b>
					</li>
					<li>
						<a href='/SearchPhone'>Tìm kiếm điện thoại</a>
					</li>
					<li>
						<a href='/SignIn'>Đăng nhập</a>
					</li>
					<li>
						<a href='/SignUp'>Đăng ký</a>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<b className='title'>Giới thiệu</b>
					</li>
					<li>
						<a href='#'>Chính sách mua hàng</a>
					</li>
					<li>
						<a href='#'>Chính sách đổi trả</a>
					</li>
					<li>
						<a href='#'>Chính sách bảo mật</a>
					</li>
					<li>
						<a href='#'>Chính sách vận chuyển</a>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<b className='title'>Liên hệ</b>
					</li>
					<li>
						<BsTelephone />
						<span>0236679999</span>
					</li>
					<li>
						<GoMail />
						<span>saltphone@gmail.com</span>
					</li>
					<li>
						<GoLocation />
						<span>Hàn Thuyên, Linh Trung </span>
						<br />
						<span>TP. Thủ Đức, TP. HCM</span>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
