import React from "react";
import './UserInformation.css'
import './UserInformationResponsive.css'
import {BiUserCircle} from 'react-icons/bi'
import {BsPen} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {TbReportMoney} from 'react-icons/tb'

function UserInformation() {
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <div className="navbar_user">
                        <div className="navbar_user_avt">
                            <BiUserCircle></BiUserCircle>
                        </div>
                        <div className="navbar_user_nickname">
                            <div className="navbar_user_nickname_name">User .123</div>
                            <div className="navbar_user_nickname_fix">
                                <div className="navbar_user_nickname_fix_text">Sửa hồ sơ</div>
                                <div className="navbar_user_nickname_fix_icon">
                                    <BsPen></BsPen>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="navbar_select">
                        <div className="navbar_select_icon-text">
                            <div className="navbar_select_icon-text_icon">
                                <AiOutlineUser></AiOutlineUser>
                            </div>
                            <div className="navbar_select_icon-text_text">Tài khoản của tôi</div>
                        </div>

                        <div className="navbar_select_text">Hồ sơ</div>
                        <div className="navbar_select_text">Địa chỉ</div>
                        <div className="navbar_select_text">Đổi mật khẩu</div>

                        <div className="navbar_select_icon-text">
                            <div className="navbar_select_icon-text_icon">
                                <TbReportMoney></TbReportMoney>
                            </div>
                            <div className="navbar_select_icon-text_text">Lịch sử mua hàng</div>
                        </div>
                    </div>

                    <button className="navbar_btn">Đăng xuất</button>
                </div>

                <div className="content">
                    <div className="content_title">Hồ sơ của tôi</div>

                    <div className="content_text">
                        Quản lý thông tin cá nhân
                    </div>

                    <form action="" className="content_form">
                        <div className="content_form_item">
                            <label htmlFor="" className="content_form_item_label">Tên</label>
                            <input type="text" className="content_form_item_input" placeholder="User.123"/>
                        </div>
                        <div className="content_form_item">
                            <label htmlFor="" className="content_form_item_label">Email</label>
                            <input type="email" className="content_form_item_input" placeholder="user***********@gmail.com"/>

                            <a href="" className="content_form_item_change">Thay đổi</a>
                        </div>
                        <div className="content_form_item">
                            <label htmlFor="" className="content_form_item_label">Số điện thoại</label>
                            <input type="text" className="content_form_item_input" placeholder="*******986"/>

                            <a href="" className="content_form_item_change">Thay đổi</a>
                        </div>
                        <div className="content_form_item">
                            <label htmlFor="" className="content_form_item_label">Giới tính</label>

                            <input type="checkbox" className="content_form_item_input" /> Nam 
                            <input type="checkbox" className="content_form_item_input" /> Nữ
                        </div>
                        <div className="content_form_item">
                            <label htmlFor="" className="content_form_item_label">Ngày sinh</label>
                            <div className="content_form_item_inputs">
                                <input type="number" min={1} max={31} step={1} className="content_form_item_input" />
                                <input type="number" min={1} max={12} step={1} className="content_form_item_input" />
                                <input type="number" min={1900} max={2022} step={1} className="content_form_item_input" />

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserInformation;
