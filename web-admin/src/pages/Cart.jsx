import React from 'react'
import {Layout, Menu} from 'antd'
import SiderMenu from '../containers/SiderMenu'

const {Header, Content, Sider} = Layout

const getItem = (label, key) => {
	return {
		key,
		label,
	}
}

const items1 = [
	getItem('Thương hiệu', '1'),
	getItem('Điện thoại', '2'),
	getItem('Hãng điện thoại', '3'),
]

function Cart(props) {
	return (
		<div>
			<Layout>
				<Header
					style={{
						backgroundColor: '#EE8488',
						display: 'flex',
					}}>
					<h1
						style={{
							color: '#FFFFFF',
							fontSize: '25px',
							width: '10%',
							textAlign: 'center',
						}}>
						Salt Phone
					</h1>
					<h1
						style={{
							paddingLeft: '7%',
							color: '#FFFFFF',
							fontSize: '20px',
							width: '25%',
						}}>
						Chi nhánh
					</h1>
					<Menu
						theme='dark'
						mode='horizontal'
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['1']}
						items={items1}
						style={{
							backgroundColor: '#EE8488',
							color: '#FFFFFF',
							fontSize: '17px',
						}}
					/>
				</Header>
				<Layout>
					<Sider width={240} className='site-layout-background'>
						<SiderMenu />
					</Sider>
					<Layout
						style={{
							padding: '0 24px 24px',
						}}>
						<Content
							className='site-layout-background'
							style={{
								padding: 24,
								height: '100%',
								margin: 0,
								minHeight: 280,
							}}>
							Dashboard
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	)
}

export default Cart
