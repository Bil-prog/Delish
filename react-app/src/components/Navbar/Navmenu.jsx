// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

// eslint-disable-next-line react/prop-types
const Navmenu = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to='/'><h1 className='logo'>Delish.</h1></Link>
        <ul className="navbar-menu"> 
            <Link to='/' onClick={()=>setMenu('home')} className={menu === "home" ? "active": ""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu === "menu" ? "active": ""}>Menu</a>
            <a href='#footer' onClick={()=>setMenu('contact')} className={menu === "contact" ? "active": ""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            {/* <img src={assets.search_icon} alt="Search icon" /> */}
            <div className="navbar-basket-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0 ? " " : 'dot'}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}className='navbar-btn'>Sign In</button>
        </div>
    </div>
  )
}

export default Navmenu