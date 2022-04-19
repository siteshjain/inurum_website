import React from 'react'
import './style1.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-mainbg">
   
    <a className="navbar-brand navbar-logo" href="/">Digital</a>
  
    <button 
      className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars text-white"></i>
    </button>
  
    <div 
      className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          
            <li className="nav-item">
                <a 
                  className="nav-link" href="/inurum_website">Home
                </a>
            </li>
            <li className="nav-item active">
                <a 
                  className="nav-link" href="/about">
                 About us
                </a>
            </li>
            <li className="nav-item">
                <a 
                  className="nav-link" href="/service">
                 Services
                </a>
            </li>
            <li className="nav-item">
                <a 
                  className="nav-link" href="/inurum_website">
                 Contact us
                </a>
            </li>
        </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar