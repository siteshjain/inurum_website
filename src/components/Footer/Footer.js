import React from 'react'
import './style.css'
const Footer = () => {
  return (
   <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
               <div class="footer-col">
                   
  	 			<h4>Let connect us.</h4>
  	 			<div class="social-links">
  	 				<a href="/"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="/"><i class="fab fa-google"></i></a>
  	 				<a href="/"><i class="fab fa-instagram"></i></a>
  	 				<a href="/"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="/">Home</a></li>
  	 				<li><a href="/about">About</a></li>
  	 				<li><a href="/service">Services</a></li>
  	 				<li><a href="/contact">Contact</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Business</h4>
  	 			<ul>
  	 				<li><a href="/">Project</a></li>
  	 				<li><a href="/">Our Team</a></li>
  	 				<li><a href="/">Facts</a></li>
  	 				<li><a href="/">Customers</a></li>
  	 				
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