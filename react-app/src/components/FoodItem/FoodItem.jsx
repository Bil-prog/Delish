import { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

// eslint-disable-next-line react/prop-types
const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  
  return (
    <div className='food-item'>
        <div className="food-item-img-cont">
            <img src={image} alt="food" className="food-item-img" />
            {
              !cartItems[id]? <img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="addIcon" className="add" />
              : <div className="food-item-counter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <div className="food-item-info">
            <p style={{marginBottom : '12px', fontWeight:'500', fontSize:'20px'}}>{name}</p>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
        
    </div>
  )
}

export default FoodItem