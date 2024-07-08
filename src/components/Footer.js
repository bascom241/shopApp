import React from 'react'
import './Footer.css'

import icon2 from '../images/icons8-twitter-48 (1).png';
import icon3 from '../images/icons8-instagram-48 (1).png'
const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='div'>
                    <h1>Fay's hub</h1>
                </div>

                <div className='linnn'>

               
                <div className='div'>
                    <h4>Quick Links</h4>
                    <p>About us</p>
                    <p>FAQS</p>
                </div>
                <div className='div'>
                    <h4>Legal Information</h4>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>

                </div>
                </div>

                <div className='subscribe-container'>
                    <h2>Subscribe to our Newsletter</h2>
                    <div className='sub-subs-container'>
                        <input
                            className='subscribe-input'
                            placeholder='Enter your email address'
                        />

                        <button className='subscribe-btn'>Subscribe</button>

                    </div>
                    <div className='social'>
                        <h2>Follow us on Social Media</h2>

                        <div className='iconImageContainer'>
                            <div className='iconImage'>
                                
                            </div>
                            <div className='iconImage'>
                                <img src={icon2} />
                            </div>
                            <div className='iconImage'>
                                <img src={icon3} />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className='line-container'>


                <div className='line'>

                </div>
                <div className='copywright'>
                    <p>@2024 Copyright, All rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
