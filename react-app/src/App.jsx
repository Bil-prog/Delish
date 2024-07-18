// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navmenu from './components/Navbar/Navmenu'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/Order/Order'

const App = () => {
  return (
    <div className='app'>
      <Navmenu />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<Order />}/>
      </Routes>
    </div>
  )
}

export default App
