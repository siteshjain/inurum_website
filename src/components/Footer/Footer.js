import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
   <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
               <div class="footer-col">
                   
  	 			<h4>Let connect us.</h4>
  	 			<div class="social-links">
  	 				<NavLink to="/inurum_website"><i class="fab fa-facebook-f"></i></NavLink>
  	 				<NavLink to="/inurum_website"><i class="fab fa-google"></i></NavLink>
  	 				<NavLink to="/inurum_website"><i class="fab fa-instagram"></i></NavLink>
  	 				<NavLink to="/inurum_website"><i class="fab fa-linkedin-in"></i></NavLink>
  	 			</div>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><NavLink to="/inurum_website">Home</NavLink></li>
  	 				<li><NavLink to="/inurum_website/about">About</NavLink></li>
  	 				<li><NavLink to="/inurum_website/service">Services</NavLink></li>
  	 				<li><NavLink to="/inurum_website/contact">Contact</NavLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Business</h4>
  	 			<ul>
  	 				<li><NavLink to="/inurum_website">Project</NavLink></li>
  	 				<li><NavLink to="/inurum_website">Our Team</NavLink></li>
  	 				<li><NavLink to="/inurum_website">Facts</NavLink></li>
  	 				<li><NavLink to="/inurum_website">Customers</NavLink></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Get In Touch</h4>
  	 			<ul>
  	 				<p>Plot No. 388, Infront of Retina Hospital, Scheme no. 54 PU4, Indore (INDIA)
info@inurum.com​
+91 7974334291</p>
  	 			</ul>
  	 		</div>
  	 		
  	 	</div>
  	 </div>
	   <div className="bordera-pp"></div>
	   <div className="outer-footer">
            <div className="outer">
                        Copyright © 2022 Inurum Technologies | Powered by Inurum Technologies
			</div>
		  
	   </div>

  </footer>
  )
}

export default Footer