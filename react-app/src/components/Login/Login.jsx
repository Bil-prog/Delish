//import React from 'react'
import './Login.css'
import { useState } from "react"
import { assets } from "../../assets/assets"

// eslint-disable-next-line react/prop-types
const Login = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className="login-popup">
      <form className="login-cont">
        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
          {currState==='Login'?<></>:<input type="text" placeholder="Your name" required />}
          <input type="email" placeholder="Your e-mail" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState==='Sign Up'?'Create account':'Login'}</button>
        <div className="login-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState==='Login'?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default Login