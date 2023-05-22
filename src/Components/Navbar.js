

import "../Styles/Navbar.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Skills from "./Skills";
import Email from "./Email";
import About from "./About";
import Footer from "./Footer";
import { HashLink as Link } from "react-router-hash-link";


function Navbar() {

return (
    <div className="navbar">
      

    
      <header>
      <nav >
      <div className="links">
      <div className="text">
        <Link to="#about"> About </Link>
        <Link to="#projects"> Projects </Link>
        <Link to="#skills"> Skills </Link>
        <Link to="#contact"> contact </Link>
         </div>
        
      </div>
      </nav> 
<div>
      <Routes>
   <Route path='contact' element ={<Email/>}/>
  

      </Routes>

    
      </div>
      </header>

      
    </div>
  );
}

export default Navbar;