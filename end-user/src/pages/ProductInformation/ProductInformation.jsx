import React from 'react'
import './ProductInformation.css'
import './ProductInformationResponsive.css'
import {RiArrowRightSLine} from 'react-icons/ri'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'

import ProductInfor from '../../assets/image/ProductInfor.png'
import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'

function ProductInformation(props) {
	return (
		<>
			<Header />
			<div className='main-screen mt-32'>
				<div className='main-content'>
					<div className='content'>
						<div className='content_header'>
							<div className='header_type-product'>Điện thoại</div>
							<div className='header_icon'>
								<RiArrowRightSLine></RiArrowRightSLine>
							</div>
							<div className='header_product-name'>
								iPhone 14 Plus
							</div>
						</div>

						<div className='content_product-information mt-11'>
							<div className='content_product-information_item'>
								<div className='content_product-images content-center'>
									<img
										src={ProductInfor}
										alt=''
										className='content_product-big-image'
									/>
								</div>
								<table className='content_product-order_select'>
									<tr className='content_product-order_select_item'>
										<td className='content_product-order_select_label'>
											Vận chuyển
										</td>
										<td className='content_product-order_select_ship'>
											Chọn địa chỉ nhận hàng
										</td>
									</tr>

									<tr className='content_product-order_select_item'>
										<td className='content_product-order_select_label'>
											Số lượng
										</td>
										<td className=''>
											<div className='content_product-order_select_amount'>
												<div className='content_product-order_select_amount_select_icon'>
													<AiOutlineMinus></AiOutlineMinus>
												</div>
												<div className='content_product-order_select_amount_select_number'>
													1
												</div>
												<div className='content_product-order_select_amount_select_icon'>
													<AiOutlinePlus></AiOutlinePlus>
												</div>
											</div>
										</td>
									</tr>
								</table>
								<div className='content_product-order_select_btns'>
									<button className='content_product-order_select_btn content_product-order_select_btn_add-to-cart'>
										<div className='content_product-order_select_btn_icon'>
											<FiShoppingCart></FiShoppingCart>
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
									Cấu hình điện thoại iPhone 14 Plus 128GB
								</div>

								<table className='content_product-information_configuration'>
									<tr>
										<td className='content_product-information_configuration_label'>
											Màn hình:
										</td>
										<td className='content_product-information_configuration_infor'>
											OLED, 6.7”, Super Retina XDR
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Hệ điều hành:
										</td>
										<td className='content_product-information_configuration_infor'>
											iOS 16
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Camera sau:
										</td>
										<td className='content_product-information_configuration_infor'>
											2 camera 12 MP
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Camera trước:
										</td>
										<td className='content_product-information_configuration_infor'>
											12 MP
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Chip:
										</td>
										<td className='content_product-information_configuration_infor'>
											Apple A15 Bionic
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											RAM:
										</td>
										<td className='content_product-information_configuration_infor'>
											6 GB
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Bộ nhớ:
										</td>
										<td className='content_product-information_configuration_infor'>
											128 GB
										</td>
									</tr>
									<tr>
										<td className='content_product-information_configuration_label'>
											Pin:
										</td>
										<td className='content_product-information_configuration_infor'>
											4325 mAh
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default ProductInformation
