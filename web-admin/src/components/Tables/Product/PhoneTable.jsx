import React, {useState, useEffect, useReducer, useRef} from 'react'
import axios from 'axios'
import {Table, Input, Space, Button} from 'antd'
import PhoneDetail from '../../Drawer/Product/PhoneDetail'
import DeletePhone from '../../Drawer/Product/DeletePhone'
import EditPhone from '../../Drawer/Product/EditPhone'
import Highlighter from 'react-highlight-words'
import {SearchOutlined} from '@ant-design/icons'

function PhoneTable() {
	const [state, setstate] = useState([])

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
		await axios.get('http://127.0.0.1:8000/api/dienthoai').then((res) => {
			setstate(
				res.data.map((row) => ({
					id: row.id,
					name: row.tendienthoai,
					brand: row.hangdienthoai,
					image: <img src={row.hinhanh} />,
					price: row.giadienthoai,
					ram: row.ram + 'GB',
					memory: row.bonho + 'GB',
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
			...getColumnSearchProps('name'),
		},
		{
			title: 'Hãng điện thoại',
			dataIndex: 'brand',
			width: '10%',
			...getColumnSearchProps('brand'),
		},
		{
			title: 'Ảnh',
			dataIndex: 'image',
			width: '10%',
		},
		{
			title: 'Giá tiền',
			dataIndex: 'price',
			width: '10%',
			sorter: (a, b) => a.price - b.price,
		},
		{
			title: 'RAM',
			dataIndex: 'ram',
			width: '5%',
			...getColumnSearchProps('ram'),
		},
		{
			title: 'Bộ nhớ',
			dataIndex: 'memory',
			width: '6%',
			...getColumnSearchProps('memory'),
		},
		{
			title: 'Số lượng',
			dataIndex: 'amount',
			width: '10%',
			sorter: (a, b) => a.amount - b.amount,
		},
		{
			title: 'Thao tác',
			dataIndex: 'operate',
			width: '25%',
		},
	]

	return <Table columns={columns} dataSource={state} pagination={{pageSize: 6}} />
}

export default PhoneTable
