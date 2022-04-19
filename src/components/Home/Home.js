import React from 'react'
import './style.css'
const Home = () => {
  return (
      <div>
        <header>
            <div className="header-content">
               
                <h4>Execute your Ideas with</h4>
                <h1>Inurum Technology</h1>
                <p>Inurum Technology delivered the quality of service in Mobile <br></br>Development, IoT, Web and Hardware Industry</p>
                <a href="/about" className='linkTo'>Read More</a>
            </div>
        </header>
        <div className="wrapper1">
            <h1>Mission and values</h1>
            <p>We have more then 8 years experience in Hardware and Mobile Industry<br></br> and provide you end to end products and our mission and values drive<br></br> our people and impact our customers and communities.</p>
            <div className="content-box">
                <div className="card">
                   <i className="fas fa-edit"></i>
                   <h2>Requirement</h2>
                   <p>We follow the first and foremost priority of gathering requirements, resources, and information to begin our project </p>
                </div>

                 <div className="card">
                  <i className="far fa-object-group"></i>
                   <h2>Design</h2>
                  <p>After requirement gathering , you will get your prototype, which will be sent ahead for the development process for the product. </p>
                </div>
                 <div className="card">
                  <i className="far fa-paper-plane"></i>
                   <h2>Development</h2>
                   <p>Development is a crucial part of the product, we follow design and patterns for creating quality development. </p>
                </div>
                 <div className="card">
                 <i  className="far fa-lightbulb"></i>
                   <h2>Social Media</h2>
                   <p>Discover new ideas and trends. Connect with existing and new audiences in deeper ways. Build, craft and enhance your brand. </p>
                </div>
                 <div className="card">
                 <i className="far fa-credit-card"></i>
                   <h2>Architecture</h2>
                   <p> Software architecture and design includes several contributory factors such as Business strategy, quality attributes, human dynamics, design, and IT environment.</p>
                </div>
                 <div className="card">
                 <i  className="far fa-user-circle"></i>
                   <h2>Help & Support</h2>
                   <p>Have questions or need to report an issue with a Inurum product or service? We've got you covered. Email or whatsapp us on +917974334291 or send us mail info@inurum.com </p>
                </div>
            </div>
        </div>
     
     <div className="expertise">
         <h1>Expertise</h1>
         <h4>We believe to delivery quality and services</h4>
         <div className="part">
             <i className="fab fa-android"></i>
             <i className="fab fa-apple"></i>
            <i className="fab fa-html5"></i>
             <i className="fab fa-aws"></i>
         </div>
     </div>

   <div className="client">
       <h1>"Amazing Designs and Quality Work!"</h1>
       <p>Inurum and Shubham programmed an android app for me. The final result was fine. I´m<br></br>
       happy with it. I will work with Shubham again. Thank you for your good work, Shubham.</p>
       <i className="fas fa-user"></i>
       <h4>NB IOT proof of concept with Quecktel BC95 or similar</h4>
       <h5>CEO, ACME INC.</h5>
   </div>

        </div>
  )
}

export default Home