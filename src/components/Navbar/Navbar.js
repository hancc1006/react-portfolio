import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
      <div className="nav-wrapper blue-grey blue-lighten-4">
        <a href="/" className="brand-logo">React Portfolio</a>
          <ul className="navbar-nav">
             
           <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                >
                  Home
              </Link>
              
           </li>
           <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                >
                  Contact
              </Link>
              
           </li>
            <li className="nav-item">
              <Link
                to="/project"
                className="nav-link"
                >
                Project 
              </Link>
            </li>
              
          </ul>
          
        
      </div>
    </nav>
    </>
  )
}


export default Navbar;


