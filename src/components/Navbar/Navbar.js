import React from 'react'
import './style1.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-mainbg">
   
    <NavLink className="navbar-brand navbar-logo" to="/">Digital</NavLink>
  
    <button 
      className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars text-white"></i>
    </button>
  
    <div 
      className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          
            <li className="nav-item">
                <NavLink exact activeClassName='nav-active'
                  className="nav-link" to="/inurum_website">Home
                </NavLink>
            </li>
            <li className="nav-item ">
                <NavLink exact activeClassName='nav-active'
                  className="nav-link" to="/inurum_website/about">
                 About us
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName='nav-active'
                  className="nav-link" to="/inurum_website/service">
                 Services
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName='nav-active'
                  className="nav-link" to="/inurum_websi">
                 Contact us
                </NavLink>
            </li>
        </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar