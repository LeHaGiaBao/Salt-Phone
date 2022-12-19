import React, {useState, useEffect} from 'react'
import {Line} from '@ant-design/plots'
import axios from 'axios'

const LineChart = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		asyncFetch()
	}, [])

	const asyncFetch = () => {
		axios.get(
			'https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json'
		).then((res) => {
			setData(res.data)
		})

		// axios.get('http://127.0.0.1:8000/api/dienthoai').then((res) => {
		// 	setData(res.data)
		// })
	}

	const config = {
		data,
		xField: 'year',
		yField: 'gdp',
		seriesField: 'name',
		yAxis: {
			label: {
				formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
			},
		},
		legend: {
			position: 'top',
		},
		smooth: true,
		animation: {
			appear: {
				animation: 'path-in',
				duration: 5000,
			},
		},
	}

	return (
		<Line
			{...config}
			style={{
				marginTop: '20px',
				padding: '20px',
				backgroundColor: '#FFFFFF',
				borderRadius: '10px',
				width: '100%',
				height: '95%',
			}}
		/>
	)
}

export default LineChart
