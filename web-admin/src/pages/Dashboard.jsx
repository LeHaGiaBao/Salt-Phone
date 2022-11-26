import React, {useEffect} from 'react'
import {Layout, Menu, Col, Row} from 'antd'
import SiderMenu from '../containers/SiderMenu'
import StatisticMenu from '../components/Statistics/StatisticsMenu'
import PieChart from '../components/Charts/PieChart'
import ColumnChart from '../components/Charts/ColumnChart'
import LineChart from '../components/Charts/LineChart'

const {Header, Content, Sider} = Layout

function Dashboard(props) {
	useEffect(() => {
		document.title = 'Trang chủ'
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
						Trang chủ
					</h1>
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
							<StatisticMenu />
							<Row gutter={16}>
								<Col span={24}>
									<LineChart />
								</Col>
							</Row>
							<Row gutter={16}>
								<Col span={12}>
									<ColumnChart />
								</Col>
								<Col span={12}>
									<PieChart />
								</Col>
							</Row>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	)
}

export default Dashboard
