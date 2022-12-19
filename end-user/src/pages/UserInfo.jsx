import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Layout, Menu, Col, Row} from 'antd'
import SiderMenu from '../layouts/Sider/SiderMenu'
import Header from '../layouts/Header/Header'
import avatar from '../assets/image/avatar.png'
import {useParams} from 'react-router-dom'
import EditCustomer from '../components/Customer/EditCustomer'

const {Content, Sider} = Layout

function UserInfo(props) {
	const [user, setUser] = useState({
		hovaten: '',
		email: '',
		sodienthoai: '',
	})

	useEffect(() => {
		document.title = 'Thông tin'
	}, 1)

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
			<Layout>
				<Header />
				<Layout>
					<Sider width={240} className='site-layout-background mt-24'>
						<SiderMenu />
					</Sider>
					<Layout>
						<Content
							className='site-layout-background'
							style={{
								padding: 20,
								height: '100%',
								margin: 0,
								minHeight: 280,
							}}>
							<div className='mt-20 ml-20'>
								{/* <UserInformation /> */}
								<div>
									<h1 className='font-bold text-xl pt-10'>
										Hồ sơ của tôi
									</h1>
									<Row>
										<img
											src={avatar}
											className='w-56 h-60 mt-14'
										/>
										<Col
											span={5}
											className='mt-24 ml-28 text-xl'>
											<div className='inline-flex'>
												<p className='text-right font-bold mb-10'>
													Họ và tên:{' '}
												</p>
											</div>
											<br />
											<div className='inline-flex'>
												<p className='text-right font-bold mb-10'>
													Email:{' '}
												</p>
											</div>
											<br />
											<div className='inline-flex'>
												<p className='text-right font-bold mb-10'>
													Số điện thoại:{' '}
												</p>
											</div>
											<br />
										</Col>
										<Col
											span={10}
											className='mt-24 text-xl'>
											<div className='inline-flex'>
												<p className='text-right mb-10'>
													{user.hovaten}
												</p>
											</div>
											<br />
											<div className='inline-flex'>
												<p className='right-0 mb-10'>
													{user.email}
												</p>
											</div>
											<br />
											<div className='inline-flex'>
												<p className='right-0 mb-10'>
													{user.sodienthoai}
												</p>
											</div>
											<br />
										</Col>
									</Row>
									<div className='mt-10 ml-8'>
										<EditCustomer
											id={user.id}
											hovaten={user.hovaten}
											email={user.email}
											sodienthoai={user.sodienthoai}
										/>
									</div>
								</div>
							</div>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	)
}

export default UserInfo
