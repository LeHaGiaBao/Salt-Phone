import React from "react";
import './ProductInformation.css'
import './ProductInformationResponsive.css'
import {RiArrowRightSLine} from 'react-icons/ri'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'

import ProductInfor from '../../assets/image/ProductInfor.png'
import ProductInforSmallImg2 from '../../assets/image/ProductInforSmallImg2.png'
import ProductInforSmallImg3 from '../../assets/image/ProductInforSmallImg3.png'
import ProductInforSmallImg4 from '../../assets/image/ProductInforSmallImg4.png'

function ProductInformation() {
    return (
        <div className="main-screen">
            <div className="main-content">
                <div className="content">
                    <div className="content_header">
                        <div className="header_type-product">Điện thoại</div>
                        <div className="header_icon"><RiArrowRightSLine></RiArrowRightSLine></div>
                        <div className="header_product-name">iPhone 14 Plus</div>
                    </div>

                    <div className="content_product">
                        <div className="content_product-images">
                            <img src={ProductInfor} alt="" className="content_product-big-image" />
                            <div className="content_product-small-images">
                                <div className="content_product-small-main-img">
                                    <img src={ProductInfor} alt="" className="content_product-small-image-full" />
                                </div>
                                <img src={ProductInforSmallImg2} alt="" className="content_product-small-image" />
                                <img src={ProductInforSmallImg3} alt="" className="content_product-small-image" />
                                <img src={ProductInforSmallImg4} alt="" className="content_product-small-image" />
                            </div>
                        </div>

                        <div className="content_product-order">
                            <div className="content_product-order_name">Apple iPhone 14 Plus</div>
                            <div className="content_product-order_price">27.999.000 đ</div>
                            
                            <table className="content_product-order_select">
                                <tr className="content_product-order_select_item">
                                    <td className="content_product-order_select_label">Vận chuyển</td>
                                    <td className="content_product-order_select_ship">Chọn địa chỉ nhận hàng</td>
                                </tr>
                                <tr className="content_product-order_select_item">
                                    <td className="content_product-order_select_label v-a-top">Bộ nhớ</td>
                                    <td className="content_product-order_select_memory">
                                        <div className="content_product-order_select_type">64 GB</div>
                                        <div className="content_product-order_select_type">128 GB</div>
                                        <div className="content_product-order_select_type">256 GB</div>
                                        <div className="content_product-order_select_type">512 GB</div>
                                    </td>
                                </tr>
                                <tr className="content_product-order_select_item">
                                    <td className="content_product-order_select_label v-a-top">Màu sắc</td>
                                    <td className="content_product-order_select_color">
                                        <div className="content_product-order_select_type">Midnight</div>
                                        <div className="content_product-order_select_type">Starlight</div>
                                        <div className="content_product-order_select_type">Blue</div>
                                        <div className="content_product-order_select_type">Purple</div>
                                        <div className="content_product-order_select_type">Red</div>
                                    </td>
                                </tr>
                                <tr className="content_product-order_select_item">
                                    <td className="content_product-order_select_label">Số lượng</td>
                                    <td className="">
                                        <div className="content_product-order_select_amount">
                                            <div className="content_product-order_select_amount_select_icon"><AiOutlineMinus></AiOutlineMinus></div>
                                            <div className="content_product-order_select_amount_select_number">1</div>
                                            <div className="content_product-order_select_amount_select_icon"><AiOutlinePlus></AiOutlinePlus></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <div className="content_product-order_select_btns">
                                <button className="content_product-order_select_btn content_product-order_select_btn_add-to-cart">
                                    <div className="content_product-order_select_btn_icon"><FiShoppingCart></FiShoppingCart></div>
                                    <div className="content_product-order_select_btn_text">Thêm vào giỏ hàng</div>
                                </button>
                                <button className="content_product-order_select_btn content_product-order_select_btn_buy">Mua hàng</button>
                            </div>
                            
                        </div>
                    </div>

                    <div className="content_product-information">
                        <div className="content_product-information_item">
                            <div className="content_product-information_title">
                                Thông tin điện thoại iPhone 14 Plus
                            </div>

                            <div className="content_product-information_detail">
                                <div className="content_product-information_detail_title">
                                    Bộ sản phẩm gồm: điện thoại + cáp sạc
                                </div>
                                <ul className="content_product-information_detail_text">
                                    <li>iPhone 14 Plus. Thật lớn.</li>
                                    <li>iPhone 14 Plus. Nghĩ lớn cùng màn hình 6,7 inch lớn hơn và thời lượng pin bền bỉ cả ngày.</li>
                                    <li>Chụp những bức ảnh tuyệt đẹp trong điều kiện thiếu sáng và dư sáng cùng hệ thống camera kép mới.</li>
                                    <li>Phát Hiện Va Chạm một tính năng an toàn mới, thay bạn gọi trợ giúp khi cần kíp.</li>
                                </ul>
                            </div>

                            <div className="content_product-information_detail">
                                <div className="content_product-information_detail_title">
                                    Tính năng nổi bật
                                </div>

                                <ul className="content_product-information_detail_text">
                                    <li>Màn hình Super Retina XDR 6,7 inch1</li>
                                    <li>Hệ thống camera tiên tiến cho chất lượng ảnh đẹp hơn trong mọi điều kiện ánh sáng</li>
                                    <li>Chế độ Điện Ảnh nay đã hỗ trợ 4K Dolby Vision tốc độ lên đến 30 fps.</li>
                                    <li>Chế độ Hành Động để quay video cầm tay mượt mà, ổn định.</li>
                                    <li>Công nghệ an toàn quan trọng - Phát Hiện Va Chạm thay bạn gọi trợ giúp khi cần kíp.</li>
                                    <li>Thời lượng pin cả ngày và thời gian xem video lên đến 26 giờ.</li>
                                    <li>Chip A15 Bionic với GPU 5 lõi để đạt hiệu suất siêu nhanh. Mạng di động 5G siêu nhanh.</li>
                                    <li>Các tính năng về độ bền dẫn đầu như Ceramic Shield và khả năng chống nước.</li>
                                    <li>iOS 16 đem đến thêm nhiều cách để cá nhân hóa, giao tiếp và chia sẻ.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="content_product-information_item">
                            <div className="content_product-information_title">
                                Cấu hình điện thoại iPhone 14 Plus 128GB
                            </div>

                            <table className="content_product-information_configuration">
                                <tr>
                                    <td className="content_product-information_configuration_label">Màn hình:</td>
                                    <td className="content_product-information_configuration_infor">OLED, 6.7”, Super Retina XDR</td>
                                </tr>
                                <tr>
                                    <td className="content_product-information_configuration_label">Hệ điều hành:</td>
                                    <td className="content_product-information_configuration_infor">iOS 16</td>
                                </tr>
                                <tr>
                                    <td className="content_product-information_configuration_label">Camera sau:</td>
                                    <td className="content_product-information_configuration_infor">2 camera 12 MP</td>
                                </tr>
                                <tr>
                                    <td className="content_product-information_configuration_label">Camera trước:</td>
                                    <td className="content_product-information_configuration_infor">12 MP</td>
                                </tr>
                                <tr>
                                    <td className="content_product-information_configuration_label">Chip:</td>
                                    <td className="content_product-information_configuration_infor">Apple A15 Bionic</td>
                                </tr>
                                <tr>
                                    <td className="content_product-information_configuration_label">RAM:</td>
                                    <td className="content_product-information_configuration_infor">6 GB</td>
                                </tr>
                                <tr>
                                    <td className="content_product-information_configuration_label">Bộ nhớ:</td>
                                    <td className="content_product-information_configuration_infor">128 GB</td>
                                </tr>
                                <tr>
                                    <td className="content_product-information_configuration_label">Sim:</td>
                                    <td className="content_product-information_configuration_infor">1 Nano SIM & 1 eSim, Hỗ trợ 5G</td>
                                </tr>
                                <tr>
                                    <td className="content_product-information_configuration_label">Pin:</td>
                                    <td className="content_product-information_configuration_infor">4325 mAh</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="other-products">
                    <div className="other-products_title">
                        Các sản phẩm khác
                    </div>

                    <div className="other-products_content">
                        <div className="product">
                            <img
                            src='https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg'
                            alt=''/>
                            <p className='product-newtag'>Mới</p>
                            <h2 className='product-name'>iPhone 14 Plus</h2>
                            <p className='product-price'>27.990.000đ</p>
                            <button className='product-buynow'>Mua ngay</button>
                            <a className='product-more' href='#'>
                                Tìm hiểu thêm &gt;
                            </a>
                        </div>
                        <div className='product'>
                            <img
                                src='https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg'
                                alt=''
                            />
                            <p className='product-newtag'>Mới</p>
                            <h2 className='product-name'>iPhone 14 Pro Max</h2>
                            <p className='product-price'>33.990.000đ</p>
                            <button className='product-buynow'>Mua ngay</button>
                            <a className='product-more' href='#'>
                                Tìm hiểu thêm &gt;
                            </a>
                        </div>
                        <div className='product'>
                            <img
                                src='https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg'
                                alt=''
                            />
                            <p className='product-newtag'>Mới</p>
                            <h2 className='product-name'>Samsung Galaxy Z Flip4 5G</h2>
                            <p className='product-price'>27.990.000đ</p>
                            <button className='product-buynow'>Mua ngay</button>
                            <a className='product-more' href='#'>
                                Tìm hiểu thêm &gt;
                            </a>
                        </div>
                        <div className='product'>
                            <img
                                src='https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg'
                                alt=''
                            />
                            <p className='product-newtag'>Mới</p>
                            <h2 className='product-name'>OPPO Reno8 Pro 5G</h2>
                            <p className='product-price'>18.990.000đ</p>
                            <button className='product-buynow'>Mua ngay</button>
                            <a className='product-more' href='#'>
                                Tìm hiểu thêm &gt;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInformation;