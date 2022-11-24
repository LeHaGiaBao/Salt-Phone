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
			<Button
				type='primary'
				onClick={showDrawer}
				// icon={<PlusOutlined />}
				className='bg-primary'>
				Chi tiết
			</Button>
			<Drawer
				title='THÔNG TIN CHI TIẾT'
				width={800}
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
					<Col span={12}>
						<img src={iphone14} className='w-72 h-72 ml-9' />
					</Col>
					<Col span={12} className='mt-8'>
						<Col span={12}>
							<h1>Điện thoại: </h1>
						</Col>
						<Col span={12}>
							<h1>iphone 14 </h1>
						</Col>
						{/* <div className='flex-auto'>
							<p>
								<h1>Tên điện thoại: </h1>iPhone 14
							</p>
						</div> */}
						{/* <p>
							<h1>Tên điện thoại: </h1>iPhone 14
						</p> */}
					</Col>
				</Row>
			</Drawer>
		</>
	)
}
export default DrawerTest
