import {Table} from 'antd'
import axios from 'axios'
import React, {useState} from 'react'
import {useEffect} from 'react'

function CustomerTable(props) {
	const [state, setState] = useState([])

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		await axios.get('http://127.0.0.1:8000/api/khachhang').then((res) => {})
	}

	const columns = [
		{
			title: 'Họ và tên',
			dataIndex: 'name',
			width: '12%',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			width: '10%',
		},
		{
			title: 'Số điện thoại',
			dataIndex: 'phone',
			width: '10%',
		},
		{
			title: 'Giới tính',
			dataIndex: 'gender',
			width: '10%',
		},
		{
			title: 'Năm sinh',
			dataIndex: 'date',
			width: '12%',
		},
	]

	return <Table columns={columns} />
}

export default CustomerTable
