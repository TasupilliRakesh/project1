import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav=()=> {
  return (
    <div id='a'>
      <img src="https://th.bing.com/th/id/OIP.tY39unNNmwbV4AnhXYx25wHaHa?w=180&h=181&c=7&r=0&o=5&dpr=1.8&pid=1.7" alt="" srcset="" height={"28px"} width={"35px"}/>
      <h3 id='a11'>Chrome</h3>
      <Link to="/home">Home</Link>
      <Link to="/the browser by google">The Broswer By Google</Link>
      <Link to="/features">Features</Link>
      <Link to="/support">Support</Link>
    </div>
  )
}

export default Nav
