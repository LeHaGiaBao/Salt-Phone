import React from 'react'
import {Card, Col, Row, Statistic} from 'antd'
import {BiUser} from 'react-icons/bi'
import {MdPhoneIphone} from 'react-icons/md'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {AiOutlineLineChart} from 'react-icons/ai'

function StatisticMenu() {
	return (
		<div className='site-statistic-demo-card'>
			<Row gutter={16}>
				<Col span={6}>
					<Card className='font-bold'>
						<Statistic
							title='Khách hàng'
							value={2000}
							valueStyle={{
								color: '#FEBE8C',
							}}
							prefix={<BiUser />}
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card className='font-bold'>
						<Statistic
							title='Sản phẩm'
							value={1000}
							valueStyle={{
								color: '#23BFCE',
							}}
							prefix={<MdPhoneIphone />}
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card className='font-bold'>
						<Statistic
							title='Bán ra'
							value={1500}
							valueStyle={{
								color: '#1DD1A1',
							}}
							prefix={<BsFillCartCheckFill />}
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card className='font-bold'>
						<Statistic
							title='Doanh thu'
							value={1000000000}
							valueStyle={{
								color: '#E7492D',
							}}
							prefix={<AiOutlineLineChart />}
							suffix='đ'
						/>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default StatisticMenu
