import React, {useState, useEffect} from 'react'
import {AiOutlineFilter} from 'react-icons/ai'
import {AiFillCaretDown} from 'react-icons/ai'
import './Brand.css'
import './BrandResponsive.css'
import axios from 'axios'

function Brand() {
	const [phones, setPhones] = useState([])

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dienthoai').then((response) => {
			setPhones(response.data)
		})
	}, [])

	return (
		<div className='screen'>
			<div className='main-content'>
				<div className='brand'>
					<div className='brand-item brand-apple'>APPLE</div>
					<div className='brand-item brand-oppo'>OPPO</div>
					<div className='brand-item brand-samsung'>SAMSUNG</div>
					<div className='brand-item brand-realme'>REALME</div>
					<div className='brand-item brand-vivo'>VIVO</div>
					<div className='brand-item brand-techno'>TECHNO</div>
				</div>

				<div className='type'>
					<div className='type-filter'>
						<div className='type-item'>
							<div className='type-item_text'>Bộ lọc</div>
							<div className='type-item_icon'>
								<AiOutlineFilter />
							</div>
						</div>

						<div className='type-filter_content'>
							<div className='type-filter_brand'>
								<p className='type-filter_title'>Hãng</p>
								<div className='type-filter_brand_content'>
									<li className='type-filter_brand_item'>
										APPLE
									</li>
									<li className='type-filter_brand_item'>
										OPPO
									</li>
									<li className='type-filter_brand_item'>
										SAMSUNG
									</li>
									<li className='type-filter_brand_item'>
										REALME
									</li>
									<li className='type-filter_brand_item'>
										VIVO
									</li>
									<li className='type-filter_brand_item'>
										TECHNO
									</li>
									<li className='type-filter_brand_item'>
										XIAOMI
									</li>
									<li className='type-filter_brand_item'>
										ASUS
									</li>
									<li className='type-filter_brand_item'>
										MASTEL
									</li>
									<li className='type-filter_brand_item'>
										NOKIA
									</li>
								</div>
							</div>
							<div className='type-filter_other'>
								<div className='type-filter_price-and-ram'>
									<div className='type-filter_price'>
										<p className='type-filter_title'>Giá</p>
										<div className='type-filter_brand_content type-filter_brand_content-ram'>
											<li className='type-filter_brand_item'>
												Dưới 3 triệu
											</li>
											<li className='type-filter_brand_item'>
												Từ 3 - 7 triệu
											</li>
											<li className='type-filter_brand_item'>
												Từ 7 - 13 triệu
											</li>
											<li className='type-filter_brand_item'>
												Từ 13 - 20 triệu
											</li>
											<li className='type-filter_brand_item'>
												Trên 20 triệu
											</li>
										</div>
									</div>
									<div className='type-filter_ram'>
										<p className='type-filter_title'>
											Dung lượng lưu trữ
										</p>
										<div className='type-filter_brand_content type-filter_brand_content-ram'>
											<li className='type-filter_brand_item'>
												32GB
											</li>
											<li className='type-filter_brand_item'>
												64GB
											</li>
											<li className='type-filter_brand_item'>
												128GB
											</li>
											<li className='type-filter_brand_item'>
												256GB
											</li>
											<li className='type-filter_brand_item'>
												512GB
											</li>
											<li className='type-filter_brand_item'>
												1TB
											</li>
										</div>
									</div>
								</div>
								<div className='type-filter_memory-and-battery'>
									<div className='type-filter_price'>
										<p className='type-filter_title'>RAM</p>
										<div className='type-filter_brand_content type-filter_brand_content-ram'>
											<li className='type-filter_brand_item'>
												2GB
											</li>
											<li className='type-filter_brand_item'>
												3GB
											</li>
											<li className='type-filter_brand_item'>
												4GB
											</li>
											<li className='type-filter_brand_item'>
												6GB
											</li>
											<li className='type-filter_brand_item'>
												8GB
											</li>
											<li className='type-filter_brand_item'>
												12GB
											</li>
										</div>
									</div>
									<div className='type-filter_ram'>
										<p className='type-filter_title'>
											Dung lượng pin
										</p>
										<div className='type-filter_brand_content type-filter_brand_content-ram'>
											<li className='type-filter_brand_item'>
												Dưới 3000mAh
											</li>
											<li className='type-filter_brand_item'>
												Trên 5000mAh
											</li>
											<li className='type-filter_brand_item'>
												từ 3000 - 5000mAh
											</li>
										</div>
									</div>
								</div>
							</div>

							<div className='type-filter_footer'>
								<div className='type-filter_footer_choose'>
									<input type='checkbox' />
									Chọn tất cả
								</div>
								<div className='type-filter_footer_result'>
									<button className='type-filter_footer_result_btn'>
										Xem kết quả
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className='type-brand'>
						<div className='type-item'>
							<div className='type-item_text'>Hãng</div>
							<div className='type-item_icon'>
								<AiFillCaretDown></AiFillCaretDown>
							</div>
						</div>

						<div className='type-filter_content type-brand-content'>
							<div className='type-filter_brand_content'>
								<li className='type-filter_brand_item'>APPLE</li>
								<li className='type-filter_brand_item'>OPPO</li>
								<li className='type-filter_brand_item'>
									SAMSUNG
								</li>
								<li className='type-filter_brand_item'>REALME</li>
								<li className='type-filter_brand_item'>VIVO</li>
								<li className='type-filter_brand_item'>TECHNO</li>
								<li className='type-filter_brand_item'>XIAOMI</li>
								<li className='type-filter_brand_item'>ASUS</li>
								<li className='type-filter_brand_item'>MASTEL</li>
								<li className='type-filter_brand_item'>NOKIA</li>
							</div>

							<div className='type-filter_footer'>
								<div className='type-filter_footer_choose'>
									<input type='checkbox' />
									Chọn tất cả
								</div>
								<div className='type-filter_footer_result'>
									<button className='type-filter_footer_result_btn'>
										Xem kết quả
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='type-price'>
						<div className='type-item'>
							<div className='type-item_text'>Giá</div>
							<div className='type-item_icon'>
								<AiFillCaretDown></AiFillCaretDown>
							</div>
						</div>

						<div className='type-filter_content type-filter_price'>
							<div className='type-filter_brand_content'>
								<li className='type-filter_brand_item'>
									Dưới 3 triệu
								</li>
								<li className='type-filter_brand_item'>
									Từ 3 - 7 triệu
								</li>
								<li className='type-filter_brand_item'>
									Từ 7 - 13 triệu
								</li>
								<li className='type-filter_brand_item'>
									Từ 13 - 20 triệu
								</li>
								<li className='type-filter_brand_item'>
									Trên 20 triệu
								</li>
							</div>

							<div className='type-filter_footer'>
								<div className='type-filter_footer_choose'>
									<input type='checkbox' />
									Chọn tất cả
								</div>
								<div className='type-filter_footer_result'>
									<button className='type-filter_footer_result_btn'>
										Xem kết quả
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='type-ram'>
						<div className='type-item'>
							<div className='type-item_text'>RAM</div>
							<div className='type-item_icon'>
								<AiFillCaretDown></AiFillCaretDown>
							</div>
						</div>

						<div className='type-filter_content type-filter_price'>
							<div className='type-filter_brand_content'>
								<li className='type-filter_brand_item'>2GB</li>
								<li className='type-filter_brand_item'>3GB</li>
								<li className='type-filter_brand_item'>4GB</li>
								<li className='type-filter_brand_item'>6GB</li>
								<li className='type-filter_brand_item'>8GB</li>
								<li className='type-filter_brand_item'>12GB</li>
							</div>

							<div className='type-filter_footer'>
								<div className='type-filter_footer_choose'>
									<input type='checkbox' />
									Chọn tất cả
								</div>
								<div className='type-filter_footer_result'>
									<button className='type-filter_footer_result_btn'>
										Xem kết quả
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='type-memory'>
						<div className='type-item'>
							<div className='type-item_text'>
								Dung lượng lưu trữ
							</div>
							<div className='type-item_icon'>
								<AiFillCaretDown></AiFillCaretDown>
							</div>
						</div>

						<div className='type-filter_content type-filter_memory'>
							<div className='type-filter_brand_content'>
								<li className='type-filter_brand_item'>32GB</li>
								<li className='type-filter_brand_item'>64GB</li>
								<li className='type-filter_brand_item'>128GB</li>
								<li className='type-filter_brand_item'>256GB</li>
								<li className='type-filter_brand_item'>512GB</li>
								<li className='type-filter_brand_item'>1TB</li>
							</div>

							<div className='type-filter_footer'>
								<div className='type-filter_footer_choose'>
									<input type='checkbox' />
									Chọn tất cả
								</div>
								<div className='type-filter_footer_result'>
									<button className='type-filter_footer_result_btn'>
										Xem kết quả
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='type-battery'>
						<div className='type-item'>
							<div className='type-item_text'>Dung lượng pin</div>
							<div className='type-item_icon'>
								<AiFillCaretDown></AiFillCaretDown>
							</div>
						</div>

						<div className='type-filter_content type-filter_price'>
							<div className='type-filter_brand_content'>
								<li className='type-filter_brand_item'>32GB</li>
								<li className='type-filter_brand_item'>
									Dưới 3000mAh
								</li>
								<li className='type-filter_brand_item'>
									Trên 5000mAh
								</li>
								<li className='type-filter_brand_item'>
									từ 3000 - 5000mAh
								</li>
							</div>

							<div className='type-filter_footer'>
								<div className='type-filter_footer_choose'>
									<input type='checkbox' />
									Chọn tất cả
								</div>
								<div className='type-filter_footer_result'>
									<button className='type-filter_footer_result_btn'>
										Xem kết quả
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='type-item type-type-phone'>
						<div className='type-item_text'>Loại điện thoại</div>
						<div className='type-item_icon'>
							<AiFillCaretDown></AiFillCaretDown>
						</div>
					</div>
					<div className='type-item type-need'>
						<div className='type-item_text'>Nhu cầu</div>
						<div className='type-item_icon'>
							<AiFillCaretDown></AiFillCaretDown>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Brand
