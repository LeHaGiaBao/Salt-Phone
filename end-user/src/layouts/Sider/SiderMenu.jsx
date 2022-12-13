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
import {BiLogOut} from 'react-icons/bi'

const getItem = (label, key, icon) => {
	return {
		key,
		icon,
		label,
	}
}

const items = [
	getItem(<a href={`UserInfo`}>Tài khoản</a>, 'sub1', <MdManageAccounts />),
	getItem(<a href={`History`}>Lịch sủ đơn hàng</a>, 'sub2', <BsFillCartCheckFill />),
	getItem(<a href={`Setting`}>Cài đặt</a>, 'sub3', <IoMdSettings />),
	getItem(<a href={`/`}>Đăng xuất</a>, 'sub4', <BiLogOut />),
]

function SiderMenu(props) {
	const location = useLocation()

	const getKey = (location) => {
		switch (location.pathname) {
			case '/UserInfo':
				return ['sub1']
				break
			case '/History':
				return ['sub2']
				break
			case '/Setting':
				return ['sub3']
				break
			case '/':
				return ['sub4']
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
					width: 300,
					paddingTop: 20,
					paddingLeft: 5,
					paddingRight: 5,
					height: 1200,
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
