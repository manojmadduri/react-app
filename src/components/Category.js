import React from 'react'
import '../styles/Category.css'
import image4 from '../assets/food1.jpg'
import image5 from '../assets/food2.jpg'
import image6 from '../assets/food3.jpg'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='category' >
      <div className='tof'>
        <h1>Type Of Food</h1>

      </div>
      <div className='food-img-detail'>
        <div className='img-container'>
          <div className='food-img'>
            < img className='food-img1' src={image4}/>
          </div>
          <div className='learn-more'>
            <h1>Fruite</h1>
            <a href='https://en.wikipedia.org/wiki/Fruit' target='_blank'>
              <button>Click Here</button>
            </a> 
          </div>
        </div>
        <div className='img-container'>
          <div className='food-img'>
            < img className='food-img1' src={image5}/>
          </div>
          <div className='learn-more'>
            <h1>Fruite</h1>
            <a href='https://en.wikipedia.org/wiki/Fruit' target='_blank'>
              <button>Click Here</button>
            </a> 
          </div>
        </div>
        <div className='img-container'>
          <div className='food-img'>
            < img className='food-img1' src={image6}/>
          </div>
          <div className='learn-more'>
            <h1>Fruite</h1>
            <a href='https://en.wikipedia.org/wiki/Fruit' target='_blank'>
              <button>Click Here</button>
            </a> 
          </div>
        </div>

      </div>


    

    </div>
  
  )
}

export default Category