import React, {useEffect} from 'react'
import {Layout, Menu} from 'antd'
import SiderMenu from '../containers/SiderMenu'

const {Header, Content, Sider} = Layout

const getItem = (label, key) => {
	return {
		key,
		label,
	}
}

function Setting(props) {
	useEffect(() => {
		document.title = 'Cài đặt'
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
						Cài đặt
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
								padding: 20,
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

export default Setting
