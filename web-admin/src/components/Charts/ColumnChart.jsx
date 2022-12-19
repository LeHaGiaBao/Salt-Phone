import React, {useState, useEffect} from 'react'
import {Column} from '@ant-design/plots'
import axios from 'axios'

function ColumnChart() {
	const [data, setData] = useState([])

	useEffect(() => {
		asyncFetch()
	}, [])

	const asyncFetch = () => {
		axios.get(
			'https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json'
		).then((res) => {
			setData(res.data)
		})
	}
	const config = {
		data,
		xField: 'city',
		yField: 'value',
		seriesField: 'type',
		isGroup: true,
		columnStyle: {
			radius: [20, 20, 0, 0],
		},
	}

	return (
		<Column
			{...config}
			style={{
				marginTop: '20px',
				padding: '20px',
				backgroundColor: '#FFFFFF',
				borderRadius: '10px',
				width: '100%',
				height: '93%',
			}}
		/>
	)
}

export default ColumnChart
