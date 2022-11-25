import React, {useState} from 'react'
import {PlusOutlined} from '@ant-design/icons'
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
} from 'antd'

import {BiEdit} from 'react-icons/bi'

import iphone14 from '../../assets/image/iphone14.png'

const {Option} = Select

const DrawerTest = () => {
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
						<img src={iphone14} className='w-96 h-96 mt-20' />
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
					</Col>
					<Col span={7} className='mt-8 text-xl'>
						<div className='inline-flex'>
							<p className='text-right'>iPhone 14</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>Apple </p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>24.990.000</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>OLED6.1"Super Retina XDR</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>2 camera 12 MP</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>12 MP</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>iOS 16</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>Apple A15 Bionic</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>4GB</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>128 GB</p>
						</div>
						<br />
						<div className='inline-flex'>
							<p className='right-0'>3279mAh</p>
						</div>
					</Col>
				</Row>
				<Divider />
				<div className='w-full text-center mt-10'>
					<Button className='bg-sky-500 hover:bg-sky-300 w-7/12 h-14 text-2xl text-white font-semibold rounded-lg '>
						Chỉnh sửa
					</Button>
				</div>
			</Drawer>
		</>
	)
}
export default DrawerTest
