import React from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {Switch,Route} from 'react-router-dom'
import Service from './components/Services/Service';
const  App=() =>{
  return (
    <div className="App">
      <Navbar/>
      <Switch>
         <Route exact path="/inurum_website" component={Home}/>
          <Route exact path="/inurum_website/about" component={About}/>
           <Route exact path="/inurum_website/service" component={Service}/>
      </Switch>
   
      
     <Footer/>
    </div>
  );
}

export default App;
