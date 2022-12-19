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
import Swal from 'sweetalert2'

function EditCustomer(props) {
	const [user, setUser] = useState({
		hovaten: '',
		email: '',
		sodienthoai: '',
	})

	const {hovaten, email, sodienthoai} = user

	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}

	const onClose = () => {
		setOpen(false)
	}

	const handleSubmitButton = () => {
		setOpen(false)
		Swal.fire('Cập nhật thông tin thành công!', '', 'success')
	}

	const handleChange = (e) => {
		setUser({...user, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.put(`http://127.0.0.1:8000/api/khachhang/${props.id}`, user)
			.then((response) => console.log(response))
			.catch((error) => console.log(error))
	}

	return (
		<>
			<Button
				type='primary'
				onClick={showDrawer}
				className='bg-[#1777F2] mr-2 font-extrabold'>
				Cập nhật thông tin
			</Button>
			<Drawer
				title='Cập nhật thông tin cá nhân'
				width={600}
				onClose={onClose}
				open={open}
				bodyStyle={{
					paddingBottom: 80,
				}}>
				<form onSubmit={handleSubmit}>
					<div>
						<h1>Họ và tên</h1>
						<input
							type='text'
							name='hovaten'
							value={user.hovaten}
							onChange={handleChange}
							placeholder={props.hovaten}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>
					<h1>Email</h1>
					<div>
						<input
							type='text'
							name='email'
							value={user.email}
							onChange={handleChange}
							placeholder={props.email}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<h1>Số điện thoại</h1>
					<div>
						<input
							type='text'
							name='sodienthoai'
							value={user.sodienthoai}
							onChange={handleChange}
							placeholder={props.sodienthoai}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<button
						type='submit'
						className='block mt-5 uppercase mx-auto shadow font-bold bg-primary hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded'
						onClick={handleSubmitButton}>
						Cập nhật
					</button>
				</form>
			</Drawer>
		</>
	)
}

export default EditCustomer
