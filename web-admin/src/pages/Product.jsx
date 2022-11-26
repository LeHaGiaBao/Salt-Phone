import React, {useEffect} from 'react'
import {Layout, Menu} from 'antd'
import SiderMenu from '../containers/SiderMenu'
import PhoneTable from '../components/Tables/Product/PhoneTable'
import NewPhone from '../components/Drawer/Product/NewPhone'

const {Header, Content, Sider} = Layout

const getItem = (label, key) => {
	return {
		key,
		label,
	}
}

function Product(props) {
	useEffect(() => {
		document.title = 'Sản phẩm'
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
						Sản phẩm kinh doanh
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
								Điện thoại
							</h1>
							<div className='float-right mb-5 bg-first rounded-lg'>
								<NewPhone />
							</div>
							<PhoneTable />
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	)
}

export default Product
