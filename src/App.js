
import React from "react";
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";




function App() {
 
  return (
    <div className="App">
    
    <Navbar />
    

   <About/>

   <Projects/>

   <Skills/>

   
      <Footer/>


    </div>
  );
}

export default App;
