// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Explore.css'
import {menu_list} from '../../assets/assets'

// eslint-disable-next-line react/prop-types
const Explore = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2 className='head-title'>Explore our menu</h2>
        <p className="explore-menu-text">Choose from a diverse menu featuring a delectale array of dishes.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={()=>setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)}
                    key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />   
    </div>
  )
}

export default Explore