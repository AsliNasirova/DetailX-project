import React from 'react'
import { NavLink } from 'react-router-dom'
import { TbShoppingCartPlus } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import './navbar.scss'
 

const Navbar = () => {
  return (
    <nav>
    <div className='navbar'>
      <div className="imageNav">
        {/* <img src="" alt="" /> */}
      </div>
      
      
        <ul className='switchNav'>
            <li><NavLink to={'/home'}>Home</NavLink></li>
            <li><NavLink to={'/pages'}>Pages</NavLink></li>
            <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
            <li><NavLink to={'/blog'}>Blog</NavLink></li>
            <li><NavLink to={'/shop'}>Shop</NavLink></li>
            <li><NavLink to={'/search'}><CiSearch /></NavLink></li>
            <li><NavLink to={'/basket'}><TbShoppingCartPlus /></NavLink></li>
            <li><NavLink to={'/wishlist'}><FaHeart /></NavLink></li>
            
            
        </ul>
        <div className='navbtn'><button className='navbtnn'>GET A QUOTA</button></div>
    </div>
    </nav>
  )
}

export default Navbar