import React, {useState} from 'react'
import {PlusOutlined} from '@ant-design/icons'
import {
	Button,
	Col,
	DatePicker,
	Drawer,
	Form,
	Input,
	InputNumber,
	Row,
	Select,
	Space,
} from 'antd'

import axios from 'axios'

const {Option} = Select

function NewPhone() {
	const [phone, setPhone] = useState({
		tendienthoai: '',
		hinhanh: '',
		giadienthoai: '',
		manhinh: '',
		camerasau: '',
		cameratruoc: '',
		cpu: '',
		hedieuhanh: '',
		ram: '',
		bonho: '',
		dungluongpin: '',
		soluong: '',
		hangdienthoai: '',
	})

	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}

	const onClose = () => {
		setOpen(false)

		axios.post('http://127.0.0.1:8000/api/dienthoai/', {
			tendienthoai: 'iPhone 14 256GB',
			hinhanh: 'https://cdn.tgdd.vn/Products/Images/42/289663/iPhone-14-plus-thumb-den-600x600.jpg',
			giadienthoai: 27990000,
			manhinh: 'OLED6.1"Super Retina XDR',
			camerasau: '2 camera 12 MP',
			cameratruoc: '12MP',
			cpu: 'Apple A15 Bionic',
			hedieuhanh: 'iOS 16',
			ram: 4,
			bonho: 256,
			dungluongpin: 3279,
			soluong: 150,
			hangdienthoai: 'Apple',
		})
	}

	return (
		<>
			<Button
				type='primary'
				onClick={showDrawer}
				className='text-lg h-10 w-48 font-bold'>
				Sản phẩm mới
			</Button>
			<Drawer
				title='Thêm điện thoại mới'
				width={720}
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
							Submit
						</Button>
					</Space>
				}>
				<Form layout='vertical' hideRequiredMark>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='tendienthoai'
								label='Tên điện thoại'
								rules={[
									{
										required: true,
									},
								]}>
								<Input
									placeholder='iPhone 14'
									value={phone.tendienthoai}
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='hangdienthoai'
								label='Hãng điện thoại'
								rules={[
									{
										required: true,
									},
								]}>
								<Input
									placeholder='Apple'
									value={phone.hangdienthoai}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='manhinh'
								label='Màn hình'
								rules={[
									{
										required: true,
									},
								]}>
								<Input
									placeholder='OLED6.1"Super Retina XDR'
									value={phone.manhinh}
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='hedieuhanh'
								label='Hệ điều hành'
								rules={[
									{
										required: true,
									},
								]}>
								<Input
									placeholder='iOS 16'
									value={phone.hedieuhanh}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='cpu'
								label='CPU'
								rules={[
									{
										required: true,
									},
								]}>
								<Input
									placeholder='Apple A15 Bionic'
									value={phone.cpu}
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='duongluongpin'
								label='Pin'
								rules={[
									{
										required: true,
									},
								]}>
								<InputNumber
									placeholder='3279'
									style={{width: '100%'}}
									value={phone.dungluongpin}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='ram'
								label='RAM'
								rules={[
									{
										required: true,
									},
								]}>
								<InputNumber
									placeholder='4'
									style={{width: '100%'}}
									value={phone.ram}
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='bonho'
								label='Bộ nhớ'
								rules={[
									{
										required: true,
									},
								]}>
								<InputNumber
									placeholder='128'
									style={{width: '100%'}}
									value={phone.bonho}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='camerasau'
								label='Camera sau'
								rules={[
									{
										required: true,
									},
								]}>
								<Input
									placeholder='2 camera 12 MP'
									value={phone.camerasau}
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='cameratruoc'
								label='Camera trước'
								rules={[
									{
										required: true,
									},
								]}>
								<Input
									placeholder='12 MP'
									value={phone.cameratruoc}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='giadienthoai'
								label='Giá điện thoại'
								rules={[
									{
										required: true,
									},
								]}>
								<InputNumber
									placeholder='27990000'
									style={{width: '100%'}}
									value={phone.giadienthoai}
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='soluong'
								label='Số lượng'
								rules={[
									{
										required: true,
									},
								]}>
								<InputNumber
									placeholder='100'
									style={{width: '100%'}}
									value={phone.soluong}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item
								name='hinhanh'
								label='Link hình ảnh'
								rules={[
									{
										required: true,
									},
								]}>
								<Input
									placeholder='Link hình'
									value={phone.hinhanh}
								/>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Drawer>
		</>
	)
}
export default NewPhone
