import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
      <ul >
        <li className='nav_item'>
      <Link to="/"> Home</Link>
      </li>
      <li className='nav_item'>
      <Link to="/calculator">Calculator</Link>
      </li>

      </ul>



    </div>
  )
}

export default Navbar