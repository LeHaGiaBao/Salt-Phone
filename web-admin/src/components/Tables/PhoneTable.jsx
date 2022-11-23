import React, {useState} from 'react'
import {Button, Form, Input, Popconfirm, Table} from 'antd'
import iphone14 from '../../assets/image/iphone14.png'
import iphone14plus from '../../assets/image/iphone14plus.jpg'
import iphone14promax from '../../assets/image/iphone14promax.png'
import DrawerTest from '../Drawer/DrawerTest'

function PhoneTable(props) {
	const [dataSource, setDataSource] = useState([
		{
			key: '0',
			name: 'Iphone 14',
			brand: 'Apple',
			image: <img src={iphone14} />,
			price: 24990000,
			operate: <DrawerTest />,
		},
		{
			key: '1',
			name: 'Iphone 14 Plus',
			brand: 'Apple',
			image: <img src={iphone14plus} />,
			price: 27990000,
			operate: <DrawerTest />,
		},
		{
			key: '2',
			name: 'Iphone 14 Pro Max',
			brand: 'Apple',
			image: <img src={iphone14promax} />,
			price: 33990000,
			operate: <DrawerTest />,
		},
	])

	const defaultColumns = [
		{
			title: 'Tên điện thoại',
			dataIndex: 'name',
			width: '20%',
		},
		{
			title: 'Hãng điện thoại',
			dataIndex: 'brand',
			width: '10%',
		},
		{
			title: 'Ảnh',
			dataIndex: 'image',
			width: '10%',
		},
		{
			title: 'Giá tiền',
			dataIndex: 'price',
			width: '15%',
			sorter: (a, b) => a.price - b.price,
		},
		{
			title: 'Thao tác',
			dataIndex: 'operate',
			width: '20%',
		},
	]

	const columns = defaultColumns.map((col) => {
		if (!col.editable) {
			return col
		}
		return {
			...col,
			onCell: (record) => ({
				// record,
				// editable: col.editable,
				dataIndex: col.dataIndex,
				title: col.title,
				// handleSave,
			}),
		}
	})

	return (
		<div>
			<Table
				columns={columns}
				dataSource={dataSource}
				// scroll={{
				// 	y: 500,
				// }}
			/>
		</div>
	)
}

export default PhoneTable
