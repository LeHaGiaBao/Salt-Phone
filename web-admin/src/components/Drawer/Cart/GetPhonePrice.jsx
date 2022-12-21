import React, {useEffect, useState} from 'react'
import axios from 'axios'

function GetPhonePrice(props) {
	const [customer, setCustomer] = useState([])
	let [name, setName] = useState('')

	useEffect(() => {
		getName()
	}, [])

	const getName = async () => {
		axios.get('http://127.0.0.1:8000/api/dienthoai').then((res) => {
			setCustomer(
				res.data.map((state) => {
					if (props.id === state.id) {
						setName((name) => (name = state.giadienthoai))
					}
				})
			)
		})
	}

	return (
		<p>
			{name.toLocaleString('it-IT', {
				style: 'currency',
				currency: 'VND',
			})}
		</p>
	)
}

export default GetPhonePrice
