import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
      <div className="main_nav">

     
     <div className="nav1">
          <div className="top_icon">
             <div className="social-top">
                 <NavLink to="/inurum_website"><i class="fab fa-facebook-f"></i></NavLink>
  	 				<NavLink to="/inurum_website"><i class="fab fa-google"></i></NavLink>
  	 				<NavLink to="/inurum_website"><i class="fab fa-instagram"></i></NavLink>
  	 				<NavLink to="/inurum_website"><i class="fab fa-linkedin-in"></i></NavLink>
             </div>
         </div>
         <ul>
                  <li>  <NavLink to="/inurum_website"><i class="fas fa-phone-alt"></i><span>9230203989</span></NavLink></li>
  	 				<li><NavLink to="/inurum_website"><i class="fas fa-envelope"></i><span>inurum123@gmail.com</span></NavLink></li>
  	 				
         </ul>
        
     </div>
      </div>
  )
}

export default Nav