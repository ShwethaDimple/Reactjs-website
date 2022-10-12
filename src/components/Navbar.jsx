import React from 'react'
import './Navbar.css';

export default function Navbar() {
   
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo-container">
                <img src="./images/logo.webp" alt="" className="navbar-logo" />
            </div>
            <div className="navbar-menu">
            <ul className='nav-menu'>
                <li className="nav-item">
                    Home
                </li>
                <li className="nav-item">
                    Services
                </li>
                <li className="nav-item">
                    Contact
                </li>
                <li className="nav-item">
                    Blog
                </li>
                <li className="nav-item nav-item-spec">
                    <a href="#">Payment</a>
                </li>
            </ul>
            </div>
            <div className="navbar-social">
                <ul className="navbar-social-menu">
                <li className="soc-face">
                <i className='fab fa-facebook-f facebook'></i>
                </li>
                <li className="soc-twit">
                <i className='fab fa-twitter twitter' />
                </li>
                <li className="soc-you">
                <i class='fab fa-youtube youtube' />
                </li>
                <li className="soc-link">
                <i class='fab fa-linkedin linkedin' />
                </li>
                </ul>
            </div>
            </div>
            
        </nav>
    </div>
  )
}
