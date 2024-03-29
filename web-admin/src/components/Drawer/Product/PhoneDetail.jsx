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
import axios from 'axios'
import Swal from 'sweetalert2'

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
			<Button
				type='primary'
				onClick={showDrawer}
				className='bg-[#31d1a9] mr-2 font-bold font-extrabold'>
				Chi tiết
			</Button>
			<Drawer
				title='THÔNG TIN CHI TIẾT SẢN PHẨM'
				width={1000}
				onClose={onClose}
				open={open}
				bodyStyle={{
					paddingBottom: 80,
				}}>
				<Row>
					<img src={props.hinhanh} className='w-56 h-56 mt-20' />
					<Col span={5} className='mt-8 ml-10 text-xl'>
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
					<Col span={12} className='mt-8 text-xl'>
						<div className='inline-flex'>
							<p className='text-right'>{props.tendienthoai}</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>{props.hangdienthoai} </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>
								{props.giadienthoai.toLocaleString('it-IT', {
									style: 'currency',
									currency: 'VND',
								})}
							</p>
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
			</Drawer>
		</>
	)
}
export default PhoneDetail
