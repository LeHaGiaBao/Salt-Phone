import React, {useEffect, useState} from 'react'
import {Card, Col, Row, Statistic} from 'antd'
import {BiUser} from 'react-icons/bi'
import {MdPhoneIphone} from 'react-icons/md'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {AiOutlineLineChart} from 'react-icons/ai'
import axios from 'axios'

function StatisticMenu() {
	const [customer, setCustomer] = useState([])
	const [phone, setPhone] = useState([])
	const [states, setStates] = useState([])
	const [total, setTotal] = useState(0)

	useEffect(() => {
		getData()
	}, [])

	const getData = () => {
		axios.get('http://127.0.0.1:8000/api/dienthoai').then((res) => {
			setPhone(res.data)
		})

		axios.get('http://127.0.0.1:8000/api/khachhang').then((res) => {
			setCustomer(res.data)
		})

		axios.get('http://127.0.0.1:8000/api/donhang').then((res) => {
			setStates(
				res.data.map((state) => {
					setTotal((total) => total + state.tongsotien)
				})
			)
		})
	}

	return (
		<div className='site-statistic-demo-card'>
			<Row gutter={16}>
				<Col span={6}>
					<Card className='font-bold'>
						<Statistic
							title='Khách hàng'
							value={customer.length}
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
							value={phone.length}
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
							value={states.length}
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
							value={total}
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
