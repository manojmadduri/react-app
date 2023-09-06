import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import image1 from '../assets/pngtree-crossed-spoon-and-fork-restaurant-and-food-logo-design-png-image_1716397.jpg'


function Navbar() {

    const changeActive = (event) =>
    {
        let t = event.currentTarget.id
        console.log(t);
        console.log("Clicked");

        let navAll = document.querySelectorAll('.nav-link'),i;
        for(i=0;i<navAll.length; i++){
            navAll[i].classList.remove('active')
        }

        document.getElementById(t).classList.add('active')
    }



  return (
    <div className='nav-bar'>
        <div className='logo'>
           <a href='./'>
            <img className='nav-logo'  src={image1}></img>
            
            </a> 
        </div>
        <div className='nav'>

        <Link onClick={changeActive} id='home' className='nav-link active' to="/">Home</Link>
        <Link onClick={changeActive} id='about' className='nav-link' to="/about">About</Link>
        <Link onClick={changeActive} id='category' className='nav-link' to="/category">Category</Link>
        <Link onClick={changeActive} id='menu' className='nav-link' to="/menu">Menu</Link>
        <Link onClick={changeActive} id='test' className='nav-link' to="/testimonial">Testimonial</Link>
        <Link onClick={changeActive} id='contact' className='nav-link' to="/contact">Contact</Link> 
        </div>
    </div>
  )
}

export default Navbar