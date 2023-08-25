import React from 'react'
import '../styles/Category.css'
import image4 from '../assets/food1.jpg'
import image5 from '../assets/food2.jpg'
import image6 from '../assets/food3.jpg'

function Category() {
  return (
    <div className='category' >
        <h1>Type Of Food</h1>
        <div className='food-img'>
            < img className='food-img1' src={image4}/>
            < img className='food-img2' src={image5}/>
            < img className='food-img3' src={image6}/>
        </div>
    </div>
  )
}

export default Category