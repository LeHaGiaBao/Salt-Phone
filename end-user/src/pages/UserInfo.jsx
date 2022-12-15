import React, {useEffect} from 'react'
import {Layout, Menu, Col, Row} from 'antd'
import SiderMenu from '../layouts/Sider/SiderMenu'
import Header from '../layouts/Header/Header'
import UserInformation from '../components/UserInformation/UserInformation'

const {Content, Sider} = Layout

function UserInfo(props) {
	useEffect(() => {
		document.title = 'Thông tin'
	}, 1)

	return (
		<div>
			<Layout>
				<Header />
				<Layout>
					<Sider width={240} className='site-layout-background mt-24'>
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
							<div className='mt-20 ml-20'>
								<UserInformation />
							</div>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	)
}

export default UserInfo
