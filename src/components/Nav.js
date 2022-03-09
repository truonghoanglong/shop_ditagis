import React from 'react'
import logo from '../assets/chuan.png'
import {NavLink} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
const Nav = () => {
  return (
    <div>
        <div className="topnav">
            <NavLink className="" to=""><img id="img-nav" src={logo} alt="" /></NavLink>
            <NavLink id="cart" to="/cart"><FaShoppingCart/></NavLink>
        </div>
    </div>
  )
}

export default Nav