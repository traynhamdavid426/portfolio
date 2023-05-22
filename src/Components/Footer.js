import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/Footer.css";
import Email from "./Email";






const Footer =(...props) => {


  const alter = {activity: { height: 70, width: 70 },}
 
    
      
  return (
    
    <div id="contact" className="footer">
    
      <footer >
      <div className="link">
      <h1 className="white  ">Reach Out:</h1>
     <a href='https://github.com/traynhamdavid426' target="_blank"><GitHubIcon  style ={alter.activity} {...props}  className="icon grow-large "  /></a>
      <a href="https://www.linkedin.com/in/david-traynham-6563b2266/" target="_blank"> <LinkedInIcon  style ={alter.activity} {...props} className="icon grow-large" /></a>
       </div>
       <div > <Email/></div>
      </footer>
    </div>
  );
}

export default Footer;