import React, {useEffect, useState} from 'react'
import {Layout, Menu} from 'antd'
import SiderMenu from '../containers/SiderMenu'
import axios from 'axios'

const {Header, Content, Sider} = Layout

const baseURL = 'http://127.0.0.1:8000/api/dienthoai'

const getItem = (label, key) => {
	return {
		key,
		label,
	}
}

function Setting(props) {
	const [posts, setPosts] = useState(null)

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setPosts(response.data)
		})
	}, [])

	if (!posts) return null

	// useEffect(() => {
	// 	document.title = 'Cài đặt'
	// }, 1)

	return (
		<div>
			<Layout>
				<Header
					style={{
						backgroundColor: '#EE8488',
						display: 'flex',
					}}>
					<h1
						style={{
							color: '#FFFFFF',
							fontSize: '25px',
							width: '10%',
							textAlign: 'center',
						}}>
						Salt Phone
					</h1>
					<h1
						style={{
							paddingLeft: '7%',
							color: '#FFFFFF',
							fontSize: '20px',
							width: '25%',
						}}>
						Cài đặt
					</h1>
				</Header>
				<Layout>
					<Sider width={240} className='site-layout-background'>
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
							Dashboard
							{posts.map((post) => {
								return (
									<div className='post-card' key={post.id}>
										<h2 className='post-title'>
											{post.tendienthoai}
										</h2>
										<img src={post.hinhanh} />
									</div>
								)
							})}
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	)
}

export default Setting
