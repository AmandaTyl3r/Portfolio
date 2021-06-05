import logo from './logo.svg';
import hero from './img/hero-bg.jpg';
import React, { Component } from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';
//import './App.css';
//import style.css from '../public/assets/css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-icons';

class App extends Component{

  componentDidMount() {
    console.log("App componenet mounted");
    
  }

  render () 
  {

    return (
    <div className="App">
    <Navbar/>
    <div id="hero" className="d-flex flex-column align-items-center justify-content-center">
    <h1>Hi, I'm Amanda!</h1>
    <h2>I'm a Full Stack Developer</h2>
    <a href="#about" className="btn-get-started scrollto"><i className="bi bi-chevron-double-down" /></a>
  </div>
  <main id="main">
    
  <About/>
  <Skills/>
  <Resume/>
  <Contact/>
  </main>
  </div>
);
  };
}

export default App;
