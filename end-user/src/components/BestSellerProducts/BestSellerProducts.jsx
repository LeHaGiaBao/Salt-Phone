import React from 'react'
import './BestSellerProducts.css'
import BigPhone from '../../assets/image/BigPhone.png'
import {AiOutlineRight} from 'react-icons/ai'
import Samsung from '../../assets/image/Samsung.png'
import Oppo from '../../assets/image/Oppo.png'
import HOT from '../../assets/image/HOT.png'

function BestSellerProducts() {
	return (
		<div className='screen'>
			<div className='best-seller-title'>
				<div className='best-seller-title_line'></div>
				<p className=''>TOP SẢN PHẨM BÁN CHẠY</p>
				<div className='best-seller-title_line'></div>
			</div>

			<div className='list-products p-t-40px'>
				<div className='list-products_divide-big-four'>
					<div className='h-100 normal-product-form w-50'>
						<div className='list-products_divide-big-four_biggest_hot'>
							<div className='list-products_divide-big-four_biggest_hot_text'>
								HOT
							</div>
						</div>

						<img
							src={BigPhone}
							alt=''
							className='product-form_img_big-size'
						/>

						<div className='product-form_new_big-size m-t-4'>Mới</div>
						<div className='product-form__infor'>
							<div className='product-form_infor_name_big-size'>
								iPhone 14 Plus
							</div>
							<div className='product-form_infor_price_big-size m-t-4'>
								27.999.000 đ
							</div>
						</div>

						<div className='product-form_btn_big-size m-b-4 m-t-8'>
							Mua ngay
						</div>

						<div className='product-form_more-info_big-size'>
							<div className='product-form_more-info_text'>
								Tìm hiểu thêm
							</div>
							<div className='product-form_more-info_icon'>
								<AiOutlineRight />
							</div>
						</div>
					</div>

					<div className='h-100 list-products_4-col w-50'>
						<div className='normal-product-form w-50 list-products_divide-big-four_mini-item'>
							<img
								src={Samsung}
								alt=''
								className='product-form_img product-form_img_mini-size'
							/>

							<div className='product-form_new_mini-size m-t-4'>
								Mới
							</div>
							<div className='product-form__infor'>
								<div className='product-form_infor_name_mini-size'>
									Samsung Galaxy Z Flip4 5G
								</div>
								<div className='product-form_infor_price_mini-size m-t-4'>
									27.999.000 đ
								</div>
							</div>

							<div className='product-form_btn_mini-size m-b-4 m-t-4'>
								Mua ngay
							</div>

							<div className='product-form_more-info_mini-size'>
								<div className='product-form_more-info_text'>
									Tìm hiểu thêm
								</div>
								<div className='product-form_more-info_icon'>
									<AiOutlineRight />
								</div>
							</div>
						</div>

						<div className='normal-product-form w-50 list-products_divide-big-four_mini-item'>
							<img
								src={Oppo}
								alt=''
								className='product-form_img product-form_img_mini-size'
							/>

							<div className='product-form_new_mini-size m-t-4'>
								Mới
							</div>
							<div className='product-form__infor'>
								<div className='product-form_infor_name_mini-size'>
									OPPO Reno8 Pro 5G
								</div>
								<div className='product-form_infor_price_mini-size m-t-4'>
									27.999.000 đ
								</div>
							</div>

							<div className='product-form_btn_mini-size m-b-4 m-t-4'>
								Đặt trước
							</div>

							<div className='product-form_more-info_mini-size'>
								<div className='product-form_more-info_text'>
									Tìm hiểu thêm
								</div>
								<div className='product-form_more-info_icon'>
									<AiOutlineRight />
								</div>
							</div>
						</div>

						<div className='normal-product-form w-50 list-products_divide-big-four_mini-item'>
							<img
								src={Samsung}
								alt=''
								className='product-form_img product-form_img_mini-size'
							/>

							<div className='product-form_new_mini-size m-t-4'>
								Mới
							</div>
							<div className='product-form__infor'>
								<div className='product-form_infor_name_mini-size'>
									Samsung Galaxy Z Flip4 5G
								</div>
								<div className='product-form_infor_price_mini-size m-t-4'>
									27.999.000 đ
								</div>
							</div>

							<div className='product-form_btn_mini-size m-b-4 m-t-4'>
								Mua ngay
							</div>

							<div className='product-form_more-info_mini-size'>
								<div className='product-form_more-info_text'>
									Tìm hiểu thêm
								</div>
								<div className='product-form_more-info_icon'>
									<AiOutlineRight />
								</div>
							</div>
						</div>

						<div className='normal-product-form w-50 list-products_divide-big-four_mini-item'>
							<img
								src={Oppo}
								alt=''
								className='product-form_img product-form_img_mini-size'
							/>

							<div className='product-form_new_mini-size m-t-4'>
								Mới
							</div>
							<div className='product-form__infor'>
								<div className='product-form_infor_name_mini-size'>
									OPPO Reno8 Pro 5G
								</div>
								<div className='product-form_infor_price_mini-size m-t-4'>
									27.999.000 đ
								</div>
							</div>

							<div className='product-form_btn_mini-size m-b-4 m-t-4'>
								Mua ngay
							</div>

							<div className='product-form_more-info_mini-size'>
								<div className='product-form_more-info_text'>
									Tìm hiểu thêm
								</div>
								<div className='product-form_more-info_icon'>
									<AiOutlineRight />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BestSellerProducts
