import React from 'react'
import image7 from '../assets/food-menu1.jpg'
import image8 from '../assets/food-menu2.jpg'
import image9 from '../assets/food-menu3.jpg'
import image10 from '../assets/food-menu4.jpg'
import image11 from '../assets/food-menu5.jpg'
import image12 from '../assets/food-menu6.jpg'

import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu' >
      <div className='menu-title'>
        <h1 className='food-menu'>Food Menu</h1>
      </div>
      <div className='all-food'>
        <div className='food-items'>
          <div className='food1'>
            <img src={image7}/>
          </div>
          <div className='food-text'>
            <h1>Food Menu Item 1</h1>
            <p className='food-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae. </p>
            <p className='price'>Price: ₹ 250</p>
          </div>
        </div>
        <div className='food-items'>
          <div className='food1'>
            <img src={image8}/>
          </div>
          <div className='food-text'>
            <h1>Food Menu Item 1</h1>
            <p className='food-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae. </p>
            <p className='price'>Price: ₹ 250</p>
          </div>
        </div>
        <div className='food-items'>
          <div className='food1'>
            <img src={image9}/>
          </div>
          <div className='food-text'>
            <h1>Food Menu Item 1</h1>
            <p className='food-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae. </p>
            <p className='price'>Price: ₹ 250</p>
          </div>
        </div>
        <div className='food-items'>
          <div className='food1'>
            <img src={image10}/>
          </div>
          <div className='food-text'>
            <h1>Food Menu Item 1</h1>
            <p className='food-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae. </p>
            <p className='price'>Price: ₹ 250</p>
          </div>
        </div>
        <div className='food-items'>
          <div className='food1'>
            <img src={image11}/>
          </div>
          <div className='food-text'>
            <h1>Food Menu Item 1</h1>
            <p className='food-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae. </p>
            <p className='price'>Price: ₹ 250</p>
          </div>
        </div>
        <div className='food-items'>
          <div className='food1'>
            <img src={image12}/>
          </div>
          <div className='food-text'>
            <h1>Food Menu Item 1</h1>
            <p className='food-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae. </p>
            <p className='price'>Price: ₹ 250</p>
          </div>
        </div>
        {/* <div className='food-items'>
          <div className='food1'>
            <img src={image13}/>
          </div>
          <div className='food-text'>
            <h1>Food Menu Item 1</h1>
            <p className='food-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae. </p>
            <p className='price'>Price: ₹ 250</p>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Menu