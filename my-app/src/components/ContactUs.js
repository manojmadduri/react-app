import React from 'react'
import '../styles/ContactUs.css'
import image17 from '../assets/restraunt2.jpg'

function ContactUs() {
return (
    <div className='contactUs'>
        <div className='contact'>
            <div className='contact-bg'>
                <img src={image17}/>
            </div>
                <div className='contact-form'>
                    <h1>Contact Us</h1>
                    <input type='text' placeholder='Your Name'></input>
                    <input type='text' placeholder='Email'></input>
                    <input type='text' placeholder='Enter Your Message'></input>
                    <button type='submit'>Submit</button>
                </div>
            
        </div>
    </div>
)
}

export default ContactUs