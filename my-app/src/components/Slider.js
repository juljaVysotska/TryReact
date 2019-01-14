import React, { Component } from 'react';

import Slide1 from '../img/slide-1.png'
import Slide2 from '../img/slide-2.png'
import Slide3 from '../img/slide-3.png'
import Slide4 from '../img/slide-4.png'

class Slider extends React.Component{
	
	constructor(props){
		super(props); 
		this.state = {
			slides:
			[
				{
					eachSlide: `url(${Slide1})`
				},
				{
					eachSlide: `url(${Slide2})`
				},
				{
					eachSlide: `url(${Slide3})`
				},
				{
					eachSlide: `url(${Slide4})`
				}
			],
			autoPlay: false,
			active: 0,
			max: 0

		}

		this.state.max = this.state.slides.length;
	}

	componentDitMount(){

	}

	componentWillUnmount(){

	}

	intervalBetweenSlides(){
		 
	}
}