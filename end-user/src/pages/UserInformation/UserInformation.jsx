import React from 'react'
import './UserInformation.css'
import './UserInformationResponsive.css'
import {BiUserCircle} from 'react-icons/bi'
import {BsPen} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {TbReportMoney} from 'react-icons/tb'
import {FiEdit2} from 'react-icons/fi'
import Header from '../../containers/Header/Header'

function UserInformation() {
	return (
		<>
			<Header />
			<div className='w-100 mt-32'>
				<div className='user-information_container'>
					<div className='navbar'>
						<div className='navbar_user'>
							<div className='navbar_user_avt'>
								<BiUserCircle />
							</div>
							<div className='navbar_user_nickname'>
								<div className='navbar_user_nickname_name'>
									User .123
								</div>
								<div className='navbar_user_nickname_fix'>
									<div className='navbar_user_nickname_fix_text'>
										Sửa hồ sơ
									</div>
									<div className='navbar_user_nickname_fix_icon'>
										<BsPen></BsPen>
									</div>
								</div>
							</div>
						</div>

						<div className='navbar_select'>
							<div className='navbar_select_icon-text'>
								<div className='navbar_select_icon-text_icon'>
									<AiOutlineUser></AiOutlineUser>
								</div>
								<div className='navbar_select_icon-text_text'>
									Tài khoản của tôi
								</div>
							</div>

							<div className='navbar_select_text'>Hồ sơ</div>
							<div className='navbar_select_text'>Địa chỉ</div>
							<div className='navbar_select_text'>Đổi mật khẩu</div>

							<div className='navbar_select_icon-text'>
								<div className='navbar_select_icon-text_icon'>
									<TbReportMoney></TbReportMoney>
								</div>
								<div className='navbar_select_icon-text_text'>
									Lịch sử mua hàng
								</div>
							</div>
						</div>

						<button className='navbar_btn'>Đăng xuất</button>
					</div>

					<div className='content'>
						<div className='content_title'>Hồ sơ của tôi</div>

						<div className='content_text'>
							<div className='content_text_title'>
								Quản lý thông tin cá nhân
							</div>
						</div>

						<table className='content_form'>
							<tr className='content_form_item'>
								<td className='content_form_item_label'>
									<label htmlFor=''>Tên</label>
								</td>
								<td className='content_form_item_input'>
									<input
										type='text'
										placeholder='User.123'
										className='content_form_item_input_date w-312'
									/>
								</td>
							</tr>
							<tr className='content_form_item'>
								<td className='content_form_item_label'>
									<label htmlFor=''>Email</label>
								</td>
								<td className='flex content_form_item_input content_form_change'>
									<div className='w-312 w-260 content_form_item_input content_form_item_input_change'>
										user***********@gmail.com
									</div>
									<a
										href=''
										className='content_form_item_change'>
										Thay đổi
									</a>
									<div className='content_form_item_change_icon'>
										<FiEdit2></FiEdit2>
									</div>
								</td>
							</tr>
							<tr className='content_form_item'>
								<td className='content_form_item_label'>
									<label htmlFor=''>Số điện thoại</label>
								</td>
								<td className='flex content_form_item_input content_form_change'>
									<div className='w-312 w-260 content_form_item_input content_form_item_input_change'>
										*******986
									</div>
									<a
										href=''
										className='content_form_item_change'>
										Thay đổi
									</a>
									<div className='content_form_item_change_icon'>
										<FiEdit2></FiEdit2>
									</div>
								</td>
							</tr>
							<tr className='content_form_item'>
								<td className='content_form_item_label'>
									<label htmlFor=''>Giới tính</label>
								</td>
								<td className='content_form_item_input input_sex'>
									<input type='checkbox' /> Nam
									<input
										type='checkbox'
										className='content_form_item_input_item'
									/>{' '}
									Nữ
								</td>
							</tr>
							<tr className='content_form_item '>
								<td className='content_form_item_label'>
									<label htmlFor=''>Ngày sinh</label>
								</td>
								<td className='content_form_item_input content_form_birth'>
									<input
										type='number'
										min={1}
										max={31}
										step={1}
										className='content_form_item_input_date'
									/>
									<input
										type='number'
										min={1}
										max={12}
										step={1}
										className='content_form_item_input_item content_form_item_input_date'
									/>
									<input
										type='number'
										min={1900}
										max={2022}
										step={1}
										className='content_form_item_input_item content_form_item_input_date'
									/>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserInformation
