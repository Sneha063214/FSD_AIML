import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      
        <Link to="/">HOME</Link>
        <Link to="/mycart">MY CART</Link>
        <Link to="/myorders">MY ORDER</Link>
        <Link to="/settings">settings</Link>
        <Link to="/profile">MY PROFILE</Link>
        <Link to="/logout">LOGOUT</Link>
    </div>
  )
}

export default Navbar