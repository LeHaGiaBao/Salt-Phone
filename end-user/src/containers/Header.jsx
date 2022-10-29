import React from 'react'
import './Header.css'

import {FiSearch, FiShoppingCart} from 'react-icons/fi'

function Header() {
	return (
		<header>
			<ul className='main-nav'>
				<li>
					<a href='#'>Salt Phone </a>
				</li>
				<li>
					<a href='#'>Điện thoại</a>
					<ul className='sub-nav-dth'>
						<li>
							<a href='#'>iPhone</a>
						</li>
						<li>
							<a href='#'>OPPO</a>
						</li>
						<li>
							<a href='#'>Samsung</a>
						</li>
						<li>
							<a href='#'>Realme</a>
						</li>
						<li>
							<a href='#'>Xiaomi</a>
						</li>
						<li>
							<a href='#'>Vivo</a>
						</li>
						<li>
							<a href='#'>Asus</a>
						</li>
						<li>
							<a href='#'>Masstel</a>
						</li>
						<li>
							<a href='#'>Nokia</a>
						</li>
						<li>
							<a href='#'>itel</a>
						</li>
					</ul>
				</li>
				<li>
					<a href='#'>Phụ kiện</a>
					<ul className='sub-nav-pkien'>
						<li>
							<a href='#'>Tai nghe</a>
						</li>
						<li>
							<a href='#'>Cáp & Sạc</a>
						</li>
						<li>
							<a href='#'>Pin dự phòng</a>
						</li>
						<li>
							<a href='#'>Ốp lưng</a>
						</li>
					</ul>
				</li>
				<li>
					<a href='#'>Hỗ trợ</a>
				</li>
				<li>
					<a href='#'>
						<FiSearch />
					</a>
				</li>
				<li>
					<a href='#'>
						<FiShoppingCart />
					</a>
				</li>
				<li>
					<a href='#'>Đăng nhập</a>
				</li>
			</ul>
		</header>
	)
}

export default Header
