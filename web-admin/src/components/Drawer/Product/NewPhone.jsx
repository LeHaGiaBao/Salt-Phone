import React, {useState} from 'react'
import {PlusOutlined} from '@ant-design/icons'
import {Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space} from 'antd'

const {Option} = Select

function NewPhone() {
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
								name='name'
								label='Tên điện thoại'
								rules={[
									{
										required: true,
										message: 'Please enter user name',
									},
								]}>
								<Input placeholder='iPhone 14' />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='owner'
								label='Hãng điện thoại'
								rules={[
									{
										required: true,
										message: 'Please select an owner',
									},
								]}>
								<Select placeholder='Chọn hãng điện thoại'>
									<Option value='xiao'>Apple</Option>
									<Option value='mao'>Samsung</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='name'
								label='Màn hình'
								rules={[
									{
										required: true,
										message: 'Please enter user name',
									},
								]}>
								<Input placeholder='OLED6.1"Super Retina XDR' />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='name'
								label='Hệ điều hành'
								rules={[
									{
										required: true,
										message: 'Please enter user name',
									},
								]}>
								<Input placeholder='iOS 16' />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='name'
								label='CPU'
								rules={[
									{
										required: true,
										message: 'Please enter user name',
									},
								]}>
								<Input placeholder='Apple A15 Bionic' />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='name'
								label='Pin'
								rules={[
									{
										required: true,
										message: 'Please enter user name',
									},
								]}>
								<Input placeholder='3279mAh' />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='name'
								label='RAM'
								rules={[
									{
										required: true,
										message: 'Please enter user name',
									},
								]}>
								<Input placeholder='4GB' />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='name'
								label='Bộ nhớ'
								rules={[
									{
										required: true,
										message: 'Please enter user name',
									},
								]}>
								<Input placeholder='128 GB' />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='name'
								label='Camera sau'
								rules={[
									{
										required: true,
										message: 'Please enter user name',
									},
								]}>
								<Input placeholder='2 camera 12 MP' />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='name'
								label='Camera trước'
								rules={[
									{
										required: true,
										message: 'Please enter user name',
									},
								]}>
								<Input placeholder='12 MP' />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item
								name='description'
								label='Link hình ảnh'
								rules={[
									{
										required: true,
										message: 'please enter url description',
									},
								]}>
								<Input placeholder='Nhập link hình ảnh' />
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Drawer>
		</>
	)
}
export default NewPhone
