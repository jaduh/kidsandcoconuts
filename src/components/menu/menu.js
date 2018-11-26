import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.png'
import './menu.css'



const Menu = () => (
    <div className='menu-container'>
    <img src={logo} width="20%" height="20%" alt="logo Kids And Coconuts" />

        <nav>
        
            <Link to="page-2">
            <div className='menu-item'>Blog</div>
            </Link>
            <Link to="page-2"><div className='menu-item'>Over ons</div>
</Link>
            <Link to="page-2"><div className='menu-item'>Babbeltje doen?</div>
</Link>
        
        </nav>

   </div>   
  )
  
  export default Menu
  