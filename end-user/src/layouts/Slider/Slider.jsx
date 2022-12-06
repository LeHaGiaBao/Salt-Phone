import React from 'react'
import {Carousel} from 'antd'
import AppleWatch from '../../assets/image/Slider/AppleWatch.png'
import Iphone from '../../assets/image/Slider/Iphone.webp'
import Reno from '../../assets/image/Slider/Reno.webp'
import Reno8 from '../../assets/image/Slider/Reno8.png'
import Samsung from '../../assets/image/Slider/Samsung.png'
import Vivo from '../../assets/image/Slider/Vivo.jpeg'

const contentStyle = {
	width: '100%',
	height: '450px',
	color: '#fff',
	lineHeight: '160px',
}

function Slider() {
	return (
		<Carousel autoplay>
			<div>
				<img src={AppleWatch} style={contentStyle} />
			</div>
			<div>
				<img src={Iphone} style={contentStyle} />
			</div>
			<div>
				<img src={Reno} style={contentStyle} />
			</div>
			<div>
				<img src={Reno8} style={contentStyle} />
			</div>
			<div>
				<img src={Samsung} style={contentStyle} />
			</div>
			<div>
				<img src={Vivo} style={contentStyle} />
			</div>
		</Carousel>
	)
}

export default Slider
