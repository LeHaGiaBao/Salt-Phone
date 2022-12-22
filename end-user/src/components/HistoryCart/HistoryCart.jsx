import React, {useState, useEffect, useReducer, useRef} from 'react'
import {Table, Input, Space, Button, Tag} from 'antd'
import axios from 'axios'
import {SearchOutlined} from '@ant-design/icons'
import {useParams} from 'react-router-dom'

function HistoryCart(props) {
	const [state, setState] = useState([])
	const [customer, setCustomer] = useState([])

	useEffect(() => {
		getData()
	}, [])

	let param = useParams()

	const getData = async () => {
		await axios.get('http://127.0.0.1:8000/api/donhang').then((res) => {
			// setState(
			// 	res.data.map((row) => ({
			// 		id: row.id,
			// 		cartid: 'ĐH' + row.id,
			// 		date: row.created_at,
			// 		money: row.tongsotien.toLocaleString('it-IT', {
			// 			style: 'currency',
			// 			currency: 'VND',
			// 		}),
			// 		address: row.diachigiaohang,
			// 	}))
			// )
		})
	}

	const columns = [
		{
			title: 'Mã đơn hàng',
			dataIndex: 'cartid',
			width: '5%',
		},
		{
			title: 'Ngày mua hàng',
			dataIndex: 'date',
			width: '7%',
		},
		{
			title: 'Tổng số tiền',
			dataIndex: 'money',
			width: '7%',
		},
		{
			title: 'Địa chỉ giao hàng',
			dataIndex: 'address',
			width: '10%',
		},
	]

	return <Table columns={columns} dataSource={state} />
}

export default HistoryCart
