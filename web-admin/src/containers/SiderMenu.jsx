import React from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import {Menu} from 'antd'
import {RiDashboardFill} from 'react-icons/ri'
import {BsFillPhoneFill} from 'react-icons/bs'
import {HiUserGroup} from 'react-icons/hi'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {BsFillBarChartFill} from 'react-icons/bs'
import {MdManageAccounts} from 'react-icons/md'
import {IoMdSettings} from 'react-icons/io'
import {TbDiscount2} from 'react-icons/tb'
import {FaBuilding} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'

const getItem = (label, key, icon) => {
	return {
		key,
		icon,
		label,
	}
}

const items = [
	getItem(<a href={`Dashboard`}>Trang chủ</a>, 'sub1', <RiDashboardFill />),
	getItem(<a href={`Product`}>Sản phẩm</a>, 'sub2', <BsFillPhoneFill />),
	getItem(<a href={`Customer`}>Khách hàng</a>, 'sub3', <HiUserGroup />),
	getItem(<a href={`Cart`}>Giỏ hàng</a>, 'sub4', <BsFillCartCheckFill />),
	getItem(<a href={`Statistics`}>Thống kê</a>, 'sub5', <BsFillBarChartFill />),
	getItem(<a href={`Account`}>Tài khoản</a>, 'sub6', <MdManageAccounts />),
	// getItem(<a href={`Voucher`}>Mã giảm giá</a>, 'sub7', <TbDiscount2 />),
	// getItem(<a href={`Office`}>Chi nhánh</a>, 'sub8', <FaBuilding />),
	getItem(<a href={`Setting`}>Cài đặt</a>, 'sub9', <IoMdSettings />),
	getItem(<a href={`/`}>Đăng xuất</a>, 'sub10', <BiLogOut />),
]

function SiderMenu(props) {
	const location = useLocation()

	const getKey = (location) => {
		switch (location.pathname) {
			case '/Dashboard':
				return ['sub1']
				break
			case '/Product':
				return ['sub2']
				break
			case '/Customer':
				return ['sub3']
				break
			case '/Cart':
				return ['sub4']
				break
			case '/Statistics':
				return ['sub5']
				break
			case '/Account':
				return ['sub6']
				break
			case '/Voucher':
				return ['sub7']
				break
			case '/Office':
				return ['sub8']
				break
			case '/Setting':
				return ['sub9']
				break
		}
	}

	const onClick = (e) => {
		console.log('click ', e)
	}

	return (
		<div>
			<Menu
				onClick={onClick}
				style={{
					width: 240,
					paddingTop: 10,
					paddingLeft: 5,
					paddingRight: 5,
					height: 1100,
					fontSize: '16px',
					borderRight: 0,
					backgroundColor: '#F6F9FA',
				}}
				selectedKeys={getKey(location)}
				mode='inline'
				items={items}
				className='bg-primary'
			/>
		</div>
	)
}

export default SiderMenu
