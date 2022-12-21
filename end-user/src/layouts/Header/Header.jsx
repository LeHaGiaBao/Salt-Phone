import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {FiSearch, FiShoppingCart, FiX} from 'react-icons/fi'
import {HiMenu, HiOutlineUserCircle} from 'react-icons/hi'
import {Avatar, Badge, Space} from 'antd'
import {useSelector} from 'react-redux'

function Header() {
	const {quantity} = useSelector((state) => state.cart)

	return (
		<header>
			<ul className='main-nav'>
				<div className='desktop'>
					<Link to='/'>
						<li>
							<a href='#'>Salt Phone </a>
						</li>
					</Link>
					<Link to='/Phone'>
						<li>
							<a href='#'>Điện thoại</a>
						</li>
					</Link>
					<Link to='/SearchPhone'>
						<li>
							<a href='#'>Tìm kiếm</a>
						</li>
					</Link>
					<li>
						<a href='/Cart'>
							<Badge count={quantity} showZero>
								<div className=''>
									<Avatar
										// shape='square'
										size='large'
										icon={
											<FiShoppingCart className='pl-3' />
										}
									/>
								</div>
							</Badge>
						</a>
					</li>
					<Link to='/SignIn'>
						<li>
							<a href='#'>Đăng nhập</a>
						</li>
					</Link>
				</div>
				<div className='mobile'>
					<li>
						<HiMenu
							className='menuIcon'
							onClick={(e) => {
								document.querySelector(
									'.main-nav-mobile'
								).style.display = 'flex'
							}}
						/>
						<div className='main-nav-mobile'>
							<div>
								<h3>SALTPHONE</h3>
								<p>Xin chào!</p>
							</div>
							<div>
								<h4>Điện thoại</h4>
								<h4>Phụ kiện</h4>
								<div id='main-nav-mobile-pk'>
									<p>Tai nghe</p>
									<p>Pin dự phòng</p>
									<p>Sạc & Cáp sạc</p>
									<p>Ốp lưng</p>
								</div>
								<h4>Hỗ trợ</h4>
							</div>
							<button>Đăng nhập</button>
						</div>
					</li>
					<li>
						<input type='text' placeholder='Tìm kiếm' />
						<FiSearch />
					</li>
					<li>
						<a href='#'>
							<FiShoppingCart />
						</a>
					</li>
					<li>
						<a href='#'>
							<HiOutlineUserCircle />
						</a>
					</li>
				</div>
			</ul>
		</header>
	)
}

export default Header
