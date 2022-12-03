import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table} from 'antd'
import PhoneDetail from '../../Drawer/Product/PhoneDetail'
import DeletePhone from '../../Drawer/Product/DeletePhone'
import EditPhone from '../../Drawer/Product/EditPhone'

function PhoneTable() {
	const [state, setstate] = useState([])
	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		await axios.get('http://127.0.0.1:8000/api/dienthoai').then((res) => {
			setstate(
				res.data.map((row) => ({
					id: row.id,
					name: row.tendienthoai,
					brand: row.hangdienthoai,
					image: <img src={row.hinhanh} />,
					price: row.giadienthoai,
					amount: row.soluong,
					operate: (
						<div>
							<PhoneDetail
								id={row.id}
								hinhanh={row.hinhanh}
								tendienthoai={row.tendienthoai}
								manhinh={row.manhinh}
								hangdienthoai={row.hangdienthoai}
								giadienthoai={row.giadienthoai}
								camerasau={row.camerasau}
								cameratruoc={row.camerasau}
								cpu={row.cpu}
								hedieuhanh={row.hedieuhanh}
								ram={row.ram}
								bonho={row.bonho}
								dungluongpin={row.dungluongpin}
								soluong={row.soluong}
							/>
							<EditPhone
								id={row.id}
								hinhanh={row.hinhanh}
								tendienthoai={row.tendienthoai}
								manhinh={row.manhinh}
								hangdienthoai={row.hangdienthoai}
								giadienthoai={row.giadienthoai}
								camerasau={row.camerasau}
								cameratruoc={row.camerasau}
								cpu={row.cpu}
								hedieuhanh={row.hedieuhanh}
								ram={row.ram}
								bonho={row.bonho}
								dungluongpin={row.dungluongpin}
								soluong={row.soluong}
							/>
							<DeletePhone id={row.id} />
						</div>
					),
				}))
			)
		})
	}

	const columns = [
		{
			title: 'Tên điện thoại',
			dataIndex: 'name',
			width: '12%',
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
			title: 'Số lượng',
			dataIndex: 'amount',
			width: '10%',
			sorter: (a, b) => a.price - b.price,
		},
		{
			title: 'Thao tác',
			dataIndex: 'operate',
			width: '20%',
		},
	]

	return (
		<Table
			columns={columns}
			dataSource={state}
			pagination={{pageSize: 5}}
			// scroll={{y: 240}}
		/>
	)
}

export default PhoneTable
