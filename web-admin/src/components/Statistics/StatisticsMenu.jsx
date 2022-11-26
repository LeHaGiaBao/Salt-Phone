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
							value={11.28}
							precision={2}
							valueStyle={{
								color: '#23BFCE',
							}}
							prefix={<BiUser />}
							suffix='%'
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card className='font-bold'>
						<Statistic
							title='Sản phẩm'
							value={9.3}
							precision={2}
							valueStyle={{
								color: '#23BFCE',
							}}
							prefix={<MdPhoneIphone />}
							suffix='%'
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card className='font-bold'>
						<Statistic
							title='Bán ra'
							value={11.28}
							precision={2}
							valueStyle={{
								color: '#1DD1A1',
							}}
							prefix={<BsFillCartCheckFill />}
							suffix='%'
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card className='font-bold'>
						<Statistic
							title='Doanh thu'
							value={9.3}
							precision={2}
							valueStyle={{
								color: '#E7492D',
							}}
							prefix={<AiOutlineLineChart />}
							suffix='%'
						/>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default StatisticMenu
