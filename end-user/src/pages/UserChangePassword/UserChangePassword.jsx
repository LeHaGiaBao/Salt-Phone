import React from "react";
import './UserChangePassword.css'
import './UserChangePassword.css'
import {BiUserCircle} from 'react-icons/bi'
import {BsPen} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {TbReportMoney} from 'react-icons/tb'

function UserChangePassword() {
    return (
        <div>
            <div className="user-information_container">
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
                    <div className="content_title">Đổi mật khẩu</div>

                    <div className="content_text">
                        Để đảm bảo an toàn, vui lòng không chia sẻ mật khẩu cho người dùng khác
                    </div>

                    <table className="content_form">
                        <tr className="content_form_item">
                            <td  className="content_form_item_label">
                                <label htmlFor="">Mật khẩu hiện tại</label>
                            </td>
                            <td  className="content_form_item_input">
                                <input type="text" className="content_form_item_input_date"/>
                                <a href="" className="content_form_item_input_forget">Quên mật khẩu?</a>
                            </td>
                        </tr>
                        <tr className="content_form_item">
                            <td  className="content_form_item_label">
                                <label htmlFor="">Mật khẩu mới</label>
                            </td>
                            <td  className="content_form_item_input">
                                <input type="text" className="content_form_item_input_date"/>
                            </td>
                        </tr>

                        <tr className="content_form_item">
                            <td  className="content_form_item_label">
                                <label htmlFor="">Nhập lại mật khẩu</label>
                            </td>
                            <td  className="content_form_item_input">
                                <input type="text" className="content_form_item_input_date"/>
                            </td>
                        </tr>
                        
                    </table>
                </div>

                <button>Lưu mật khẩu</button>
            </div>
        </div>
    )
}

export default UserChangePassword;
