import React from 'react'
import {Layout, Menu} from 'antd'
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons'

import {RiDashboardFill} from 'react-icons/ri'
import {BsFillPhoneFill} from 'react-icons/bs'
import {HiUserGroup} from 'react-icons/hi'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {BsFillBarChartFill} from 'react-icons/bs'
import {MdManageAccounts} from 'react-icons/md'
import {IoMdSettings} from 'react-icons/io'
import {TbDiscount2} from 'react-icons/tb'
import {FaBuilding} from 'react-icons/fa'
import PhoneTable from '../containers/PhoneTable'

const {Header, Content, Sider} = Layout

const getItem = (label, key, icon, children, type) => {
	return {
		key,
		icon,
		children,
		label,
		type,
	}
}

const items = [
	getItem('Dashboard', 'sub1', <RiDashboardFill />),
	getItem('Điện thoại', 'sub2', <BsFillPhoneFill />, [
		getItem('Danh sách hãng điện thoại', '5'),
		getItem('Danh sách điên thoại', '6'),
	]),
	getItem('Khách hàng', 'sub4', <HiUserGroup />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),
	getItem('Giỏ hàng', 'sub5', <BsFillCartCheckFill />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),
	getItem('Thống kê', 'sub6', <BsFillBarChartFill />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),
	getItem('Tài khoản', 'sub7', <MdManageAccounts />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),
	getItem('Mã giảm giá', 'sub8', <TbDiscount2 />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),
	getItem('Chi nhánh', 'sub9', <FaBuilding />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),
	getItem('Cài đặt', 'sub10', <IoMdSettings />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),
]

function Dashboard() {
	return (
		<Layout>
			<Header
				style={{
					backgroundColor: '#EE8488',
				}}>
				<h1
					style={{
						color: '#FFFFFF',
						fontSize: '20px',
						display: 'flex',
					}}>
					Salt Phone
				</h1>
			</Header>
			<Layout>
				<Sider width={240} className='site-layout-background'>
					<Menu
						mode='inline'
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{
							paddingTop: 10,
							height: '100%',
							fontSize: '15px',
							borderRight: 0,
							backgroundColor: '#F6F9FA',
						}}
						items={items}
					/>
				</Sider>
				<Layout
					style={{
						padding: '0 24px 24px',
					}}>
					<Content
						className='site-layout-background'
						style={{
							padding: 24,
							height: 1000,
							margin: 0,
							minHeight: 280,
						}}>
						Dashboard
						<PhoneTable />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default Dashboard
