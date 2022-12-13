import React from 'react'
import {Button} from 'antd'
import axios from 'axios'
import Swal from 'sweetalert2'

function DeletePhone(props) {
	const handleDelete = () => {
		Swal.fire({
			title: 'Bạn có chắc chắn xoá sản phẩm không?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Chắc chắn',
			denyButtonText: `Không`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				axios.delete(`http://127.0.0.1:8000/api/dienthoai/${props.id}`)
					.then((response) => console.log(response))
					.catch((error) => console.log(error))
				Swal.fire('Xoá thành công', '', 'success')
			} else if (result.isDenied) {
				Swal.fire('Không thực hiện thao tác', '', 'info')
			}
		})
	}

	return (
		<Button
			type='primary'
			onClick={handleDelete}
			className='bg-red-500 font-extrabold hover:bg-red-700'>
			Xoá
		</Button>
	)
}

export default DeletePhone
