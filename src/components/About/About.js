import React from 'react'
import AboutWeb from './AboutWeb/AboutWeb'
import './style3.css'
const About = () => {
  return (
      <div>
      <div className="section-2 container-fluid p-0">
          <div className="cover">
              <div className="content text-center">
                  <h1>About Us</h1>
                  <h4>Welcome to INURUM Technologies</h4>
                  <h6>What makes us who we are today..</h6>
              </div>
          </div>
          <div className="container-fluid text-center">
              <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
                  <div className="rect">
                  
                      <h1>Who Are We</h1>
                      <p>At Inurum, we develop innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design and development,mobile development, e-commerce solutions, business-to-business applications, business-to-client applications, hardware design, PCB designs, managed hosting and internet portal management are few that we offer. Satisfied clients around the globe bear testimony to the quality of our work.</p>

                  </div>
                  <div className="rect">
                    
                      <h1>Our Mission</h1>
                      <p>As a leader in technology exploring, Inurum is committed to exporting quality software worldwide.
                          <br></br><br></br>

The general purpose of Inurum is to develop and promote advanced information technologies for multi-user operation.
 <br></br><br></br>
Inurum’s business philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions and the best quality/price ratio found in the industry.</p>

                  </div>
                  <div className="rect">
                     
                      <h1>What We Do</h1>
                      <div className="count">

                    
                      <p><i className="fas fa-caret-right"></i>PCB Design</p>
                       <p><i className="fas fa-caret-right"></i>Mobile Development</p>
                        <p><i className="fas fa-caret-right"></i>UI UX Design</p>
                         <p><i className="fas fa-caret-right"></i>Web Development</p>
                          <p><i className="fas fa-caret-right"></i>eCommerce Store</p>
                           <p><i className="fas fa-caret-right"></i>IoT Solutions</p>
                            <p><i className="fas fa-caret-right"></i>Hybrid App</p>
                             <p><i className="fas fa-caret-right"></i>Flutter</p>
                              <p><i className="fas fa-caret-right"></i>Cloud Computing</p>
                               <p><i className="fas fa-caret-right"></i>AWS</p>
                                <p><i className="fas fa-caret-right"></i>Animations</p>
                                 <p><i className="fas fa-caret-right"></i>Photoshop</p>
                                  <p><i className="fas fa-caret-right"></i>Backend Development</p>
                                   <p><i className="fas fa-caret-right"></i>Node</p>
                                    <p><i className="fas fa-caret-right"></i>Laravel</p>
                      </div>
                  </div>
                 
              </div>
          </div>
      </div>

       <div className="wrapper">
            <h1 className='head'>Our 6-D Process</h1>
            
            <div className="content-box">
                <div className="card">
                  
                   <h1>01.</h1>
                  <h4>Discover</h4>
                 <p> We understand the specific cause and effect of your project.</p>
                </div>

                 <div className="card">
                 
                   <h1>02.</h1>
                   <h4>Define</h4>
                  <p>We examine with detail the elements and structure of your company.</p>
                </div>
                 <div className="card">
                
                   <h1>03.</h1>
                    <h4>Design</h4>
                      <p>After all the preparation steps the hard work begins.</p>
                </div>
                 <div className="card">
                
                   <h1>04.</h1>
                    <h4>Develop</h4>
                      <p>Our developers take charge of translating the design into interactive digits.</p>
                </div>
                 <div className="card">
               
                   <h1>05.</h1>
                   <h4>Deploy</h4>
                     <p>This is the final step before delivering. The project’s functionality is thoroughly tested and deployed.</p>
                </div>
                 <div className="card">
                
                   <h1>06.</h1>
                   <h4>Deliver</h4>
                     <p>Once all tested we will delivered the quality of project with your hand.</p>
                </div>
            </div>
        </div>
       
        <AboutWeb/>

        <div className="satisfied">
           <div className="show1">
             <h4>Some Numbers</h4>
             <p>Happy moments </p>
           </div>
           <div className="show2">
             <h1>87</h1>
             <p>Satisfied<br></br>Clients</p>
           </div>
            <div className="show2">
             <h1>150</h1>
             <p>Projects<br></br>Completed</p>
           </div>
            <div className="show2">
             <h1>28</h1>
             <p>Accolades<br></br>Earned</p>
           </div>
            <div className="show2">
             <h1>56K+</h1>
             <p>Lines of<br></br>Code</p>
           </div>
        </div>

      </div>
  )
}

export default About