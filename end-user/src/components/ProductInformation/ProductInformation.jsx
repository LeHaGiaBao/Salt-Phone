import React, {useEffect, useState} from 'react'
import './ProductInformation.css'
import './ProductInformationResponsive.css'
import {RiArrowRightSLine} from 'react-icons/ri'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import axios from 'axios'
import {json, parsePath, useParams} from 'react-router-dom'

function ProductInformation() {
	const [phone, setPhone] = useState({
		tendienthoai: '',
		hinhanh: '',
		giadienthoai: '',
		hangdienthoai: '',
		manhinh: '',
		ram: '',
		bonho: '',
		hedieuhanh: '',
		cpu: '',
		camerasau: '',
		cameratruoc: '',
		dungluongpin: '',
	})

	let param = useParams()

	useEffect(() => {
		axios.get(`http://127.0.0.1:8000/api/dienthoai/${param.id}`).then(
			(response) => {
				setPhone(response.data)
			}
		)
	}, [])

	return (
		<div>
			<Header />
			<div className='main-screen mt-32'>
				<div className='main-content'>
					<div className='content'>
						<div className='content_header'>
							<div className='header_type-product'>Điện thoại</div>
							<div className='header_icon'>
								<RiArrowRightSLine />
							</div>
							<div className='header_product-name'>
								{phone.tendienthoai}
							</div>
						</div>

						<div className='content_product-information mt-12'>
							<div className='content_product-information_item'>
								<div className='content_product-images'>
									<img
										src={phone.hinhanh}
										alt=''
										className='content_product-big-image'
									/>
								</div>
								<div className='content_product-order_price'>
									{phone.giadienthoai} đ
								</div>
								<table className='content_product-order_select'>
									<tr className='content_product-order_select_item'>
										<td className='content_product-order_select_label'>
											Số lượng
										</td>
										<td className=''>
											<div className='content_product-order_select_amount'>
												<div className='content_product-order_select_amount_select_icon'>
													<AiOutlineMinus />
												</div>
												<div className='content_product-order_select_amount_select_number'>
													1
												</div>
												<div className='content_product-order_select_amount_select_icon'>
													<AiOutlinePlus />
												</div>
											</div>
										</td>
									</tr>
								</table>
								<div className='content_product-order_select_btns'>
									<button className='content_product-order_select_btn content_product-order_select_btn_add-to-cart'>
										<div className='content_product-order_select_btn_icon'>
											<FiShoppingCart />
										</div>
										<div className='content_product-order_select_btn_text'>
											Thêm vào giỏ hàng
										</div>
									</button>
									<button className='content_product-order_select_btn content_product-order_select_btn_buy'>
										Mua hàng
									</button>
								</div>
							</div>

							<div className='content_product-information_item'>
								<div className='content_product-information_title'>
									Cấu hình điện thoại {phone.tendienthoai}
								</div>

								<table className='content_product-information_configuration'>
									<tr>
										<td className='content_product-information_configuration_label'>
											Màn hình:
										</td>
										<td className='content_product-information_configuration_infor'>
											{phone.manhinh}
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Hệ điều hành:
										</td>
										<td className='content_product-information_configuration_infor'>
											{phone.hedieuhanh}
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Camera sau:
										</td>
										<td className='content_product-information_configuration_infor'>
											{phone.camerasau}
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Camera trước:
										</td>
										<td className='content_product-information_configuration_infor'>
											{phone.cameratruoc}
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Chip:
										</td>
										<td className='content_product-information_configuration_infor'>
											{phone.cpu}
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											RAM:
										</td>
										<td className='content_product-information_configuration_infor'>
											{phone.ram} GB
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Bộ nhớ:
										</td>
										<td className='content_product-information_configuration_infor'>
											{phone.bonho} GB
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Pin:
										</td>
										<td className='content_product-information_configuration_infor'>
											{phone.dungluongpin} mAh
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ProductInformation
