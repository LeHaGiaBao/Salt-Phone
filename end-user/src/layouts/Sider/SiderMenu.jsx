import React from 'react'
import {useLocation, useHistory, useParams} from 'react-router-dom'
import {Menu} from 'antd'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {MdManageAccounts} from 'react-icons/md'
import {BiLogOut} from 'react-icons/bi'

const getItem = (label, key, icon) => {
	return {
		key,
		icon,
		label,
	}
}

function SiderMenu(props) {
	let param = useParams()

	const location = useLocation()

	const items = [
		getItem(
			<a href={`UserInfo/${param.id}`}>Thông tin cá nhân</a>,
			'sub1',
			<MdManageAccounts />
		),
		getItem(
			<a href={`/History/${param.id}`}>Lịch sủ đơn hàng</a>,
			'sub2',
			<BsFillCartCheckFill />
		),
		getItem(<a href={`/`}>Đăng xuất</a>, 'sub3', <BiLogOut />),
	]

	const getKey = (location) => {
		switch (location.pathname) {
			case `/UserInfo/${param.id}`:
				return ['sub1']
				break
			case `/History/${param.id}`:
				return ['sub2']
				break
			case '/':
				return ['sub3']
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
