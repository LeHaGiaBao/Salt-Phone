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

function NewAccount() {
	const [account, setAccount] = useState({
		email: '',
		matkhau: '',
	})

	const {email, matkhau} = account

	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}

	const onClose = () => {
		setOpen(false)
	}

	const handleSubmitButton = () => {
		setOpen(false)
		Swal.fire('Tạo tài khoản thành công!', '', 'success')
		// window.location.reload()
	}

	const handleChange = (e) => {
		setAccount({...account, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://127.0.0.1:8000/api/taikhoanadmin/', account)
			.then((response) => console.log(response))
			.catch((error) => console.log(error))
	}

	return (
		<>
			<Button
				type='primary'
				onClick={showDrawer}
				className='text-lg h-10 w-48 font-bold'>
				Tài khoản mới
			</Button>
			<Drawer
				title='Thêm tài khoản mới'
				width={600}
				onClose={onClose}
				open={open}
				bodyStyle={{
					paddingBottom: 80,
				}}>
				<form onSubmit={handleSubmit}>
					<div>
						<h1>Email</h1>
						<input
							type='email'
							name='email'
							value={account.email}
							onChange={handleChange}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>
					<h1>Mật khẩu</h1>
					<div>
						<input
							type='text'
							name='matkhau'
							value={account.matkhau}
							onChange={handleChange}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>
					<button
						type='submit'
						className='block mt-5 uppercase mx-auto shadow font-bold bg-primary hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded'
						onClick={handleSubmitButton}>
						submit
					</button>
				</form>
			</Drawer>
		</>
	)
}

export default NewAccount
