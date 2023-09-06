import React from 'react'
import '../styles/About.css'
import image3 from '../assets/about-photo.jpg'

function AboutPage() {
  return (
    <div className='about-us'>
      <div className='about-text'>
      <h4>About US</h4>
      <h1>We've beem making healthy food last for 10 years</h1>
      <p align="justify" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab eos omnis, nobis dignissimos perferendis et officia architecto, fugiat possimus eaque qui ullam excepturi suscipit aliquid optio, maiores praesentium soluta alias asperiores saepe commodi consequatur? Perferendis est placeat facere aspernatur!   </p>
      </div>
      <div className='about-img'>
        <img src={image3}/>
      </div>
    </div>
    
  )
}

export default AboutPage