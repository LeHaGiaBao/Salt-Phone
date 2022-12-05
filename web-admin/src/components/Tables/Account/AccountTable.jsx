import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table} from 'ant-table-extensions'
import PhoneDetail from '../../Drawer/Product/PhoneDetail'
import DeletePhone from '../../Drawer/Product/DeletePhone'
import EditPhone from '../../Drawer/Product/EditPhone'
import {BsEyeFill} from 'react-icons/bs'

function AccountTable() {
	const [state, setstate] = useState([])
	useEffect(() => {
		getData()
	}, [])

	const [passwordShown, setPasswordShow] = useState(false)

	const togglePasswordVisiblity = () => {
		setPasswordShow(passwordShown ? false : true)
	}

	const getData = async () => {
		await axios.get('http://127.0.0.1:8000/api/taikhoanadmin').then((res) => {
			setstate(
				res.data.map((row) => ({
					number: 'TK' + row.id,
					email: row.email,
					password: row.matkhau,
					operate: (
						<div>
							<DeletePhone id={row.id} />
						</div>
					),
				}))
			)
		})
	}

	const columns = [
		{
			title: 'Số thứ tự',
			dataIndex: 'number',
			width: '8%',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			width: '20%',
		},
		{
			title: 'Mật khẩu',
			dataIndex: 'password',
			width: '20%',
		},
		{
			title: 'Thao tác',
			dataIndex: 'operate',
			width: '5%',
		},
	]

	return (
		<Table
			columns={columns}
			dataSource={state}
			pagination={{pageSize: 5}}
			// searchable
			// scroll={{y: 240}}
		/>
	)
}

export default AccountTable
