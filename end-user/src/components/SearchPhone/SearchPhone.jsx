import React, {useState, useEffect} from 'react'
import './SearchPhone.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {AudioOutlined} from '@ant-design/icons'
import {Input, Space} from 'antd'

const {Search} = Input

const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: '#1890ff',
		}}
	/>
)

export default function SearchPhone() {
	const [APIData, setAPIData] = useState([])
	const [filteredResults, setFilteredResults] = useState([])
	const [searchInput, setSearchInput] = useState('')
	useEffect(() => {
		axios.get(`http://127.0.0.1:8000/api/dienthoai`).then((response) => {
			setAPIData(response.data)
		})
	}, [])

	const searchItems = (searchValue) => {
		setSearchInput(searchValue)
		if (searchInput !== '') {
			const filteredData = APIData.filter((item) => {
				return Object.values(item)
					.join('')
					.toLowerCase()
					.includes(searchInput.toLowerCase())
			})
			setFilteredResults(filteredData)
		} else {
			setFilteredResults(APIData)
		}
	}

	return (
		<div className='NewProduct'>
			<h1 className='title'>TÌM KIẾM SẢN PHẨM</h1>
			<Search
				placeholder='Nhập tên sản phẩm'
				allowClear
				style={{
					marginTop: 100,
					width: 500,
				}}
				onChange={(e) => searchItems(e.target.value)}
			/>
			<div className='products'>
				{searchInput.length > 1
					? filteredResults.map((phone) => {
							return (
								<div className='product'>
									<img src={phone.hinhanh} alt='' />
									<p className='product-newtag'>Mới</p>
									<h2 className='product-name'>
										{phone.tendienthoai}
									</h2>
									<p className='product-price'>
										{phone.giadienthoai.toLocaleString(
											'it-IT',
											{
												style: 'currency',
												currency: 'VND',
											}
										)}
									</p>
									<button className='product-buynow'>
										Mua ngay
									</button>
									<Link to={`/PhoneInfo/${phone.id}`}>
										<a className='product-more' href='#'>
											Tìm hiểu thêm &gt;
										</a>
									</Link>
								</div>
							)
					  })
					: APIData.map((phone) => {
							return (
								<div className='product'>
									<img src={phone.hinhanh} alt='' />
									<p className='product-newtag'>Mới</p>
									<h2 className='product-name'>
										{phone.tendienthoai}
									</h2>
									<p className='product-price'>
										{phone.giadienthoai.toLocaleString(
											'it-IT',
											{
												style: 'currency',
												currency: 'VND',
											}
										)}
									</p>
									<button className='product-buynow'>
										Mua ngay
									</button>
									<Link to={`/PhoneInfo/${phone.id}`}>
										<a className='product-more' href='#'>
											Tìm hiểu thêm &gt;
										</a>
									</Link>
								</div>
							)
					  })}
			</div>
		</div>
	)
}
