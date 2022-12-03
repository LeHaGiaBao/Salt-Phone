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

function EditPhone(props) {
	const [phone, setPhone] = useState({
		tendienthoai: '',
		hangdienthoai: '',
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
	})

	const {
		tendienthoai,
		hangdienthoai,
		hinhanh,
		giadienthoai,
		manhinh,
		camerasau,
		cameratruoc,
		cpu,
		hedieuhanh,
		ram,
		bonho,
		dungluongpin,
		soluong,
	} = phone

	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}

	const onClose = () => {
		setOpen(false)
	}

	const handleSubmitButton = () => {
		setOpen(false)
		Swal.fire('Cập nhật điện thoại thành công!', '', 'success')
	}

	const handleChange = (e) => {
		setPhone({...phone, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.put(`http://127.0.0.1:8000/api/dienthoai/${props.id}`, phone)
			.then((response) => console.log(response))
			.catch((error) => console.log(error))
	}

	return (
		<>
			<Button
				type='primary'
				onClick={showDrawer}
				className='bg-[#1777F2] mr-2 font-extrabold'>
				Cập nhật
			</Button>
			<Drawer
				title='Thêm sản phẩm mới'
				width={600}
				onClose={onClose}
				open={open}
				bodyStyle={{
					paddingBottom: 80,
				}}>
				<form onSubmit={handleSubmit}>
					<div>
						<h1>Tên điện thoại</h1>
						<input
							type='text'
							name='tendienthoai'
							value={phone.tendienthoai}
							onChange={handleChange}
							placeholder={props.tendienthoai}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>
					<h1>Hãng điện thoại</h1>
					<div>
						<input
							type='text'
							name='hangdienthoai'
							value={phone.hangdienthoai}
							onChange={handleChange}
							placeholder={props.hangdienthoai}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<h1>Link hình ảnh</h1>
					<div>
						<input
							type='text'
							name='hinhanh'
							value={phone.hinhanh}
							onChange={handleChange}
							placeholder={props.hinhanh}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<div>
						<h1>Giá điện thoại</h1>
						<input
							type='number'
							name='giadienthoai'
							value={phone.giadienthoai}
							onChange={handleChange}
							placeholder={props.giadienthoai}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<div>
						<h1>Màn hình</h1>
						<input
							type='text'
							name='manhinh'
							value={phone.manhinh}
							onChange={handleChange}
							placeholder={props.manhinh}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<div>
						<h1>Camera sau</h1>
						<input
							type='text'
							name='camerasau'
							value={phone.camerasau}
							onChange={handleChange}
							placeholder={props.camerasau}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<div>
						<h1>Camera trước</h1>
						<input
							type='text'
							name='cameratruoc'
							value={phone.cameratruoc}
							onChange={handleChange}
							placeholder={props.cameratruoc}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<div>
						<h1>CPU</h1>
						<input
							type='text'
							name='cpu'
							value={phone.cpu}
							onChange={handleChange}
							placeholder={props.cpu}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<div>
						<h1>Hệ điều hành</h1>
						<input
							type='text'
							name='hedieuhanh'
							value={phone.hedieuhanh}
							onChange={handleChange}
							placeholder={props.hedieuhanh}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<div>
						<h1>RAM</h1>
						<input
							type='number'
							name='ram'
							value={phone.ram}
							onChange={handleChange}
							placeholder={props.ram}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<div>
						<h1>Bộ nhớ</h1>
						<input
							type='number'
							name='bonho'
							value={phone.bonho}
							onChange={handleChange}
							placeholder={props.bonho}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<div>
						<h1>Dung lượng pin</h1>
						<input
							type='number'
							name='dungluongpin'
							value={phone.dungluongpin}
							onChange={handleChange}
							placeholder={props.dungluongpin}
							class='w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 mb-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
						/>
					</div>

					<div>
						<h1>Số lượng</h1>
						<input
							type='number'
							name='soluong'
							value={phone.soluong}
							onChange={handleChange}
							placeholder={props.soluong}
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

export default EditPhone
