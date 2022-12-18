import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Col, Row} from 'antd'
import avatar from '../../assets/image/avatar.png'
import {useParams} from 'react-router-dom'

function UserInformation(props) {
	const [user, setUser] = useState({
		hovaten: '',
		email: '',
		sodienthoai: '',
	})

	let param = useParams()

	useEffect(() => {
		axios.get(`http://127.0.0.1:8000/api/khachhang/${param.id}`).then(
			(response) => {
				setUser(response.data)
			}
		)
	}, [])

	return (
		<div>
			<h1 className='font-bold text-xl pt-10'>Hồ sơ của tôi</h1>
			<Row>
				<img src={avatar} className='w-56 h-60 mt-14' />
				<Col span={5} className='mt-24 ml-28 text-xl'>
					<div className='inline-flex'>
						<p className='text-right font-bold mb-10'>Họ và tên: </p>
					</div>
					<br />
					<div className='inline-flex'>
						<p className='text-right font-bold mb-10'>Email: </p>
					</div>
					<br />
					<div className='inline-flex'>
						<p className='text-right font-bold mb-10'>
							Số điện thoại:{' '}
						</p>
					</div>
					<br />
				</Col>
				<Col span={10} className='mt-24 text-xl'>
					<div className='inline-flex'>
						<p className='text-right mb-10'>{user.hovaten}</p>
					</div>
					<br />
					<div className='inline-flex'>
						<p className='right-0 mb-10'>{user.email}</p>
					</div>
					<br />
					<div className='inline-flex'>
						<p className='right-0 mb-10'>{user.sodienthoai}</p>
					</div>
					<br />
				</Col>
			</Row>
		</div>
	)
}

export default UserInformation
