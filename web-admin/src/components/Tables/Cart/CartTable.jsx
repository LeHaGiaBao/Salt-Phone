import {Table} from 'antd'
import axios from 'axios'
import React, {useState} from 'react'
import {useEffect} from 'react'

function CartTable(props) {
	const [state, setState] = useState([])

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		await axios.get('http://127.0.0.1:8000/api/khachhang').then((res) => {})
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
			title: 'Địa chỉ giao hàng',
			dataIndex: 'address',
			width: '10%',
		},
		{
			title: 'Trạng thái đơn hàng',
			dataIndex: 'status',
			width: '9%',
		},
		{
			title: 'Khách hàng',
			dataIndex: 'customer',
			width: '9%',
		},
		{
			title: 'Thao tác',
			dataIndex: 'operate',
			width: '10%',
		},
	]

	return <Table columns={columns} />
}

export default CartTable
