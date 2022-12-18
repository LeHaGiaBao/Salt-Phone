import React, {useEffect} from 'react'
import {Layout, Menu, Col, Row} from 'antd'
import SiderMenu from '../layouts/Sider/SiderMenu'
import Header from '../layouts/Header/Header'
import HistoryCart from '../components/HistoryCart/HistoryCart'

const {Content, Sider} = Layout

function History(props) {
	useEffect(() => {
		document.title = 'Lịch sử đơn hàng'
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
							<div className='ml-16 mt-32'>
								<HistoryCart />
							</div>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	)
}

export default History
