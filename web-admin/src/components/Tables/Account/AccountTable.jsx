import React, {useState, useEffect, useReducer, useRef} from 'react'
import {Table, Input, Space, Button} from 'antd'
import axios from 'axios'
import Highlighter from 'react-highlight-words'
import {SearchOutlined} from '@ant-design/icons'
import DeleteAccount from '../../Drawer/Account/DeleteAccount'

function AccountTable(props) {
	const [state, setState] = useState([])

	useEffect(() => {
		getData()
	}, [])

	const [searchText, setSearchText] = useState('')
	const [searchedColumn, setSearchedColumn] = useState('')

	const searchInput = useRef(null)

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm()
		setSearchText(selectedKeys[0])
		setSearchedColumn(dataIndex)
	}

	const handleReset = (clearFilters) => {
		clearFilters()
		setSearchText('')
	}

	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
			close,
		}) => (
			<div
				style={{
					padding: 8,
				}}
				onKeyDown={(e) => e.stopPropagation()}>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() =>
						handleSearch(selectedKeys, confirm, dataIndex)
					}
					style={{
						marginBottom: 8,
						display: 'block',
					}}
				/>
				<Space>
					<Button
						type='primary'
						onClick={() =>
							handleSearch(selectedKeys, confirm, dataIndex)
						}
						icon={<SearchOutlined />}
						size='small'
						style={{
							width: 90,
							backgroundColor: '#EE8488',
						}}>
						Search
					</Button>
					<Button
						type='link'
						size='small'
						onClick={() => {
							close()
						}}>
						close
					</Button>
				</Space>
			</div>
		),

		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? '#1890ff' : undefined,
				}}
			/>
		),
		onFilter: (value, record) =>
			record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100)
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: '#EE8488',
						color: 'white',
						fontWeight: 'bolder',
						padding: 0,
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ''}
				/>
			) : (
				text
			),
	})

	const getData = async () => {
		await axios.get('http://127.0.0.1:8000/api/taikhoanadmin/').then((res) => {
			setState(
				res.data.map((row) => ({
					id: row.id,
					email: row.email,
					matkhau: row.matkhau,
					operate: (
						<div>
							<DeleteAccount id={row.id} />
						</div>
					),
				}))
			)

			console.log(res.data)
		})
	}

	const columns = [
		{
			title: 'Email',
			dataIndex: 'email',
			width: '25%',
			...getColumnSearchProps('email'),
		},
		{
			title: 'Mật khẩu',
			dataIndex: 'matkhau',
			width: '25%',
			...getColumnSearchProps('password'),
		},
		{
			title: 'Thao tác',
			dataIndex: 'operate',
			width: '10%',
		},
	]

	return <Table columns={columns} dataSource={state} pagination={{pageSize: 6}} />
}

export default AccountTable
