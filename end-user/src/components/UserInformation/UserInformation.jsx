import React from 'react'
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

function UserInformation(props) {
	return (
		<Row>
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
	)
}

export default UserInformation
