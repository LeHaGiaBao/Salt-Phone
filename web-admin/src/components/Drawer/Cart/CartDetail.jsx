import React, {useEffect, useState} from 'react'
import {Button, Drawer, Row, Table} from 'antd'
import axios from 'axios'
import GetPhoneName from './GetPhoneName'
import GetPhoneImage from './GetPhoneImage'
import GetPhonePrice from './GetPhonePrice'

function CartDetail(props) {
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}
	const onClose = () => {
		setOpen(false)
	}

	const [state, setState] = useState([])

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		await axios
			.get(`http://127.0.0.1:8000/api/chitietdonhang?madonhang=${props.id}`)
			.then((res) => {
				setState(
					res.data.map((row) => ({
						id: row.id,
						name: <GetPhoneName id={row.masanpham} />,
						image: <GetPhoneImage id={row.masanpham} />,
						price: <GetPhonePrice id={row.masanpham} />,
						quantity: row.soluong,
					}))
				)
			})
	}

	const columns = [
		{
			title: 'Tên điện thoại',
			dataIndex: 'name',
			width: '15%',
		},
		{
			title: 'Hình ảnh',
			dataIndex: 'image',
			width: '15%',
		},
		{
			title: 'Giá điện thoại',
			dataIndex: 'price',
			width: '15%',
		},
		{
			title: 'Số lượng mua',
			dataIndex: 'quantity',
			width: '10%',
		},
	]

	return (
		<>
			<Button
				type='primary'
				onClick={showDrawer}
				className='bg-[#31d1a9] mr-2 font-bold font-extrabold'>
				Chi tiết
			</Button>
			<Drawer
				title='THÔNG TIN CHI TIẾT ĐƠN HÀNG'
				width={1000}
				onClose={onClose}
				open={open}
				bodyStyle={{
					paddingBottom: 80,
				}}>
				<Row>
					<div className='w-full'>
						<Table
							columns={columns}
							dataSource={state}
							pagination={{pageSize: 6}}
						/>
					</div>
				</Row>
			</Drawer>
		</>
	)
}

export default CartDetail
