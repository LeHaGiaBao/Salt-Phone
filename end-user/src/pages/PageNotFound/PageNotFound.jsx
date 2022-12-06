import './PageNotFound.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import NotFoundNum4 from '../../assets/image/NotFoundNum4.png'
import NotFoundNum0 from '../../assets/image/NotFoundNum0.png'
import {Link} from 'react-router-dom'

function PageNotFound() {
	return (
		<div className='PageNotFound'>
			<div className='PageNotFound-img'>
				<img src={NotFoundNum4} alt='' />
				<img src={NotFoundNum0} alt='' />
				<img src={NotFoundNum4} alt='' />
			</div>
			<p className='PageNotFound-content'>
				Rất tiếc, không thể tải được trang :(
			</p>
			<Link to='/'>
				<button className='PageNotFound-action'>
					<BsArrowLeftShort /> Quay lại trang chủ
				</button>
			</Link>
		</div>
	)
}

export default PageNotFound
