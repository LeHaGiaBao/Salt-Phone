import React, {useState, useEffect, useReducer, useRef} from 'react'
import {Table, Input, Space, Button, Tag} from 'antd'
import axios from 'axios'
import Highlighter from 'react-highlight-words'
import {SearchOutlined} from '@ant-design/icons'
import CartDetail from '../../Drawer/Cart/CartDetail'
import GetName from './GetName'

function CartTable(props) {
	const [state, setState] = useState([])
	const [customer, setCustomer] = useState([])

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
		await axios.get('http://127.0.0.1:8000/api/donhang').then((res) => {
			setState(
				res.data.map((row) => ({
					id: row.id,
					cartid: 'ĐH' + row.id,
					date: row.created_at,
					money: row.tongsotien.toLocaleString('it-IT', {
						style: 'currency',
						currency: 'VND',
					}),
					address: row.diachigiaohang,
					// status: row.trangthaidonhang,
					customer: (
						<>
							<GetName id={row.makhachhang} />
						</>
					),
					operate: <CartDetail id={row.id} />,
				}))
			)
		})
	}

	const columns = [
		{
			title: 'Mã đơn hàng',
			dataIndex: 'cartid',
			width: '5%',
			...getColumnSearchProps('cartid'),
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
			...getColumnSearchProps('address'),
		},
		// {
		// 	title: 'Trạng thái đơn hàng',
		// 	dataIndex: 'status',
		// 	width: '9%',
		// },
		{
			title: 'Khách hàng',
			dataIndex: 'customer',
			width: '9%',
		},
		{
			title: 'Thao tác',
			dataIndex: 'operate',
			width: '5%',
		},
	]

	return <Table columns={columns} dataSource={state} />
}

export default CartTable
