import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-scroll'; 
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Resume from './Resume';
import MainPage from './mainPage';

const Navbar = () => {
    return ( 
         <nav style={{position:'fixed', margin:'0', width:'100%', backgroundColor:'#525e65', boxShadow:'0 7px 20px 0rgba(0,0,0,0.2),0 4px 10px 0 rgba(0,0,0,0.2)'}}>
        <div>
            <ul className="nav justify-content-center">
  <li className="nav-item">
  <Link className="nav-link active" style={{color:"#DBE8D4", cursor:'pointer'}} to="Home" spy={true} smooth={true} offset={50} duration={500}> Home </Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link active" style={{color:"#DBE8D4", cursor:'pointer'}} to="Project" spy={true} smooth={true} offset={50} duration={500}> Projects </Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link active" style={{color:"#DBE8D4", cursor:'pointer'}} to="About" spy={true} smooth={true} offset={50} duration={500}> About </Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link active" style={{color:"#DBE8D4", cursor:'pointer'}} to="Socials" spy={true} smooth={true} offset={50} duration={500}> Socials </Link>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" style={{color:"#DBE8D4", cursor:'pointer'}} to="/Resume">Resume</NavLink>
  </li>
</ul>
        </div>
      </nav>
     
        
        
     );
}
 
export default Navbar;