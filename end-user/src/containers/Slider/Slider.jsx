import React from 'react'
import './Slider.css'
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'

import Iphone from '../../assets/image/Slider/Iphone.webp'
import AppleWatch from '../../assets/image/Slider/AppleWatch.png'
import Samsung from '../../assets/image/Slider/Samsung.png'
import Reno from '../../assets/image/Slider/Reno.webp'
import Vivo from '../../assets/image/Slider/Vivo.jpeg'

function Slider() {
	const images = [Iphone, AppleWatch, Samsung, Reno, Vivo]

	return (
		<Slide indicators={true}>
			<div className='each-slide-effect'>
				<img src={`${images[0]}`} alt='' />
			</div>
			<div className='each-slide-effect'>
				<img src={`${images[1]}`} alt='' />
			</div>
			<div className='each-slide-effect'>
				<img src={`${images[2]}`} alt='' />
			</div>
			<div className='each-slide-effect'>
				<img src={`${images[3]}`} alt='' />
			</div>
			<div className='each-slide-effect'>
				<img src={`${images[4]}`} alt='' />
			</div>
		</Slide>
	)
}

export default Slider
