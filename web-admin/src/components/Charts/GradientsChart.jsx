import React, {useState, useEffect} from 'react'
import {Area} from '@ant-design/plots'

function GradientsChart() {
	const [data, setData] = useState([])

	useEffect(() => {
		asyncFetch()
	}, [])

	const asyncFetch = () => {
		fetch(
			'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
		)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => {
				console.log('fetch data failed', error)
			})
	}
	const config = {
		data,
		xField: 'Date',
		yField: 'scales',
		xAxis: {
			range: [0, 1],
			tickCount: 5,
		},
		areaStyle: () => {
			return {
				fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
			}
		},
	}

	return (
		<Area
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

export default GradientsChart
