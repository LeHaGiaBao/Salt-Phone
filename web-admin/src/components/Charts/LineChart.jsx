import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {Line} from '@ant-design/plots'

const LineChart = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		asyncFetch()
	}, [])

	const asyncFetch = () => {
		fetch(
			'https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json'
		)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => {
				console.log('fetch data failed', error)
			})
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
		// @TODO 后续会换一种动画方式
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
				marginTop: '30px',
				padding: '20px',
				backgroundColor: '#FFFFFF',
				borderRadius: '10px',
				width: '100%',
				height: '94%',
			}}
		/>
	)
}

export default LineChart
