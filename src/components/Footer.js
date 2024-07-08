import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='div'>
                    <h1>Fay's hub</h1>
                </div>
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

                <div className='subscribe-container'>
                    <h4>Subscribe to our Newsletter</h4>
                    <div className='sub-subs-container'>
                        <input
                            className='subscribe-input'
                            placeholder='Enter your email address'
                        />

                        <button className='subscribe-btn'>Subscribe</button>
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default Footer
