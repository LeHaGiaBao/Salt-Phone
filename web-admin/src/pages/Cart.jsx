import React, {useEffect} from 'react'
import {Layout, Menu} from 'antd'
import SiderMenu from '../containers/SiderMenu'
import CartTable from '../components/Tables/Cart/CartTable'

const {Header, Content, Sider} = Layout

const getItem = (label, key) => {
	return {
		key,
		label,
	}
}

function Cart(props) {
	useEffect(() => {
		document.title = 'Giỏ hàng'
	}, 1)

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
						Giỏ hàng
					</h1>
				</Header>
				<Layout>
					<Sider width={240} className='site-layout-background'>
						<SiderMenu />
					</Sider>
					<Layout>
						<Content
							className='site-layout-background'
							style={{
								padding: 24,
								height: '100%',
								margin: 0,
								minHeight: 280,
							}}>
							<h1
								style={{
									fontSize: '20px',
									paddingBottom: 20,
								}}>
								Chi tiết giỏ hàng
							</h1>
							<CartTable />
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	)
}

export default Cart
