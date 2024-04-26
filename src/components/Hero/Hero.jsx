import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero box'>
      <div className='hero-text'> 
    <h1>We Ensure better education for better world</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur a facere iste, nihil, expedita laborum dolores maiores, repellat earum ut labore? Expedita, dolore ipsam. Eius quae ipsum maxime voluptates!</p>
    <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
