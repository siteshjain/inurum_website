import React from 'react'
import './style.css'
import data from './CardData.js'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
      <div>
        <header>
            <div className="header-content">
               
                <h4>Execute your Ideas with</h4>
                <h1>Inurum Technology</h1>
                <p>Inurum Technology delivered the quality of service in Mobile <br></br>Development, IoT, Web and Hardware Industry</p>
                <NavLink exact to="/inurum_website/about" className='linkTo'>Read More</NavLink>
            </div>
         
        </header>
        <div className="wrapper1">
            <h1>Mission and values</h1>
            
            <p>We have more then 8 years experience in Hardware and Mobile Industry<br></br> and provide you end to end products and our mission and values drive<br></br> our people and impact our customers and communities.</p>
            <div className="content-box">
                 {
                   data.map((elem)=>{
                     const {id,image,title,detail}=elem;
                  
                     return (
                        <div className="card" key={id}>
                        
                        <img src={image} alt="img" className='homeImg'/>
                        <h2>{title}</h2>
                        <p>{detail} </p>
                     </div>
                     )
                   })
                  }    
                </div>
           </div>
     
     <div className="expertise">
         <h1>Expertise</h1>
         <h4>We believe to delivery quality and services</h4>
         <div className="part">
           {/* <img src={require("./homeImg/7.gif")} className='expe_img' al></img>
            <img src={require("./homeImg/8.gif")} className='expe_img' al></img>
             <img src={require("./homeImg/9.gif")} className='expe_img' al></img> */}
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