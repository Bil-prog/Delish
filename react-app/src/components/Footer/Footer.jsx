// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1 className='logo'>Delish.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste enim eveniet, nobis suscipit veniam saepe tenetur quae perferendis, itaque id quos natus libero cum dolor eos facilis voluptas numquam.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2> 
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Delivery</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>000-000-000</li>
                    <li>contact@delish.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="copyright">Copyright &#169; {currentYear} Delish. All rights reserved.</p>
    </div>
  )
}

export default Footer