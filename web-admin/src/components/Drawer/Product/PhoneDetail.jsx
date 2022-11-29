import React, {useEffect, useState} from 'react'
import {ExclamationCircleFilled, PlusOutlined} from '@ant-design/icons'
import {
	Button,
	Col,
	DatePicker,
	Divider,
	Drawer,
	Form,
	Input,
	Row,
	Select,
	Space,
	Modal,
} from 'antd'
import {BiEdit} from 'react-icons/bi'
import iphone14 from '../../../assets/image/iphone14.png'
import axios from 'axios'

const {Option} = Select

const {confirm} = Modal

const showDeleteConfirm = () => {
	confirm({
		title: 'Bạn có chắc muốn xoá điện thoại này không?',
		icon: <ExclamationCircleFilled />,
		okText: 'Yes',
		okType: 'danger',
		cancelText: 'No',
		width: '35%',
		onOk() {
			console.log('OK')
		},
		onCancel() {
			console.log('Cancel')
		},
	})
}

function PhoneDetail(props) {
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}
	const onClose = () => {
		setOpen(false)
	}

	return (
		<>
			<Button type='primary' onClick={showDrawer} className='bg-primary'>
				Chi tiết
			</Button>
			<Drawer
				title='THÔNG TIN CHI TIẾT SẢN PHẨM'
				width={900}
				onClose={onClose}
				open={open}
				bodyStyle={{
					paddingBottom: 80,
				}}
				extra={
					<Space>
						<Button onClick={onClose}>Cancel</Button>
						<Button
							onClick={onClose}
							type='primary'
							className='bg-primary font-bold'>
							OK
						</Button>
					</Space>
				}>
				<Row>
					<Col span={10}>
						<img src={props.hinhanh} className='w-96 h-96 mt-20' />
					</Col>
					<Col span={5} className='mt-8 text-xl'>
						<div className='inline-flex'>
							<p className='text-right font-bold'>Điện thoại: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>Hãng: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>Giá tiền: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>Màn hình: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>Camera sau: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>Camera trước: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>Hệ điều hành: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>CPU: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>RAM: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>Bộ nhớ: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>Pin: </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='text-right font-bold'>Số lượng: </p>
						</div>
					</Col>
					<Col span={7} className='mt-8 text-xl'>
						<div className='inline-flex'>
							<p className='text-right'>{props.tendienthoai}</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.hangdienthoai} </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.giadienthoai}đ</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.manhinh}</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.camerasau}</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.cameratruoc}</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.hedieuhanh}</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.cpu}</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.ram}GB</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.bonho}GB</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.dungluongpin}mAh</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.soluong}</p>
						</div>
					</Col>
				</Row>
				<Divider />
				<div className='w-full text-center mt-10'>
					<button className='text-2xl font-semibold text-white bg-first hover:bg-primary w-6/12 h-14  rounded-lg'>
						Chỉnh sửa
					</button>
				</div>
				<div className='w-full text-center mt-5'>
					<button
						className='text-2xl font-semibold text-white bg-red-500 hover:bg-red-700 w-6/12 h-14  rounded-lg'
						onClick={showDeleteConfirm}>
						Xoá điện thoại
					</button>
				</div>
			</Drawer>
		</>
	)
}
export default PhoneDetail
