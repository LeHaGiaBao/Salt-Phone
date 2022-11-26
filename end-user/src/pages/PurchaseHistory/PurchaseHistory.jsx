import React from "react";
import './PurchaseHistory.css'
import './PurchaseHistory.css'
import {BiUserCircle} from 'react-icons/bi'
import {BsPen} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {TbReportMoney} from 'react-icons/tb'

function PurchaseHistory() {
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
                    <div className="content_title">Lịch sử mua hàng</div>
                    <div className="content_text">Quản lý thông tin các sản phẩm đã mua</div>
                    <div className="content_product">
                        <div className="content_product_item">
                            <div className="content_product_item_img_info">
                                <div className="content_product_item_img">
                                    <img src="https://cdn.tgdd.vn/Products/Images/42/245545/iPhone-14-plus-thumb-den-600x600.jpg" alt="" className="" />
                                </div>
                                <div className="content_product_item_info">
                                    <div className="content_product_item_info_title">Apple iPhone 14 Plus</div>
                                    <div className="content_product_item_info_type">128GB, Purple</div>
                                    <div className="content_product_item_info_amount">x1</div>
                                </div>
                            </div>

                            <div className="content_product_item_info_price">29.999.000 đ</div>
                        </div>

                        <div className="content_product_item">
                            <div className="content_product_item_img_info">
                                <div className="content_product_item_img">
                                    <img src="https://cdn.tgdd.vn/Products/Images/54/236016/bluetooth-airpods-2-apple-mv7n2-imei-1-org.jpg" alt="" className="" />
                                </div>
                                <div className="content_product_item_info">
                                    <div className="content_product_item_info_title">AirPods 3 Wireless ...</div>
                                    <div className="content_product_item_info_type">White</div>
                                    <div className="content_product_item_info_amount">x2</div>
                                </div>

                            </div>

                            <div className="content_product_item_info_price">8.980.000 đ</div>
                        </div>
                    </div>

                    <div className="content_sum">
                        Tổng số tiền: 
                        <div className="content_sum_number">38.979.000 đ</div>
                    </div>

                    <div className="content_btn">
                        <button>Mua lại</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseHistory;
