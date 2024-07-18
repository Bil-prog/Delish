// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'

const Navmenu = () => {
    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
         <h1 className='logo'>Delish.</h1>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu('home')} className={menu === "home" ? "active": ""}>Home</li>
            <li onClick={()=>setMenu('menu')} className={menu === "menu" ? "active": ""}>Menu</li>
            <li onClick={()=>setMenu('contact')} className={menu === "contact" ? "active": ""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="Search icon" />
            <div className="navbar-basket-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button className='navbar-btn'>Sign In</button>
        </div>
    </div>
  )
}

export default Navmenu