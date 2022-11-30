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
	const [input, setInput] = useState({
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

	const handleChange = (e) => {
		const {value, name} = e.target
		setInput({...input, [name]: value})
	}

	const handleSubmit = (e) => {
		setOpen(false)
		e.preventDefault()
		const data = {...input}

		axios.post('http://127.0.0.1:8000/api/dienthoai/').then((res) => {
			setInput(res.data)
			console.log(res.data)
		})
	}

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
							onClick={handleSubmit}
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
									value={input.tendienthoai}
									onChange={(e) => e.target.value}
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
									value={input.hangdienthoai}
									onChange={(e) => e.target.value}
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
									value={input.manhinh}
									onChange={(e) => e.target.value}
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
									value={input.hedieuhanh}
									onChange={(e) => e.target.value}
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
									value={input.cpu}
									onChange={(e) => e.target.value}
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
									value={input.dungluongpin}
									onChange={(e) => e.target.value}
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
									value={input.ram}
									onChange={(e) => e.target.value}
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
									value={input.bonho}
									onChange={(e) => e.target.value}
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
									value={input.camerasau}
									onChange={(e) => e.target.value}
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
									value={input.cameratruoc}
									onChange={(e) => e.target.value}
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
									value={input.giadienthoai}
									onChange={(e) => e.target.value}
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
									value={input.soluong}
									onChange={(e) => e.target.value}
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
									value={input.hinhanh}
									onChange={(e) => e.target.value}
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
