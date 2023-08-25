import React from 'react'
import '../styles/Home.css'
import image2 from '../assets/yH1aFs.jpg'

function Home() {

  return (
    <div className='home'>
      <div className='home-bg' > 
        <img src={image2}/>
      </div>
      <div className='home-text'>
        <h1>Eat Right Food</h1>
        <h4>Eat Healty, it is good for our health.</h4>
        <a href="/menu" >Menu</a>
      </div>
    </div>
    
  )
}

export default Home