import React from "react";
import './Nav.css'

function Nav() {
  return (
    <nav className='no-shadows mynav'>
      <div className="nav-wrapper">
        <a href="#home" className="brand-logo left">
          Logo
        </a>
        <a href="#home" data-target="mobile-demo" className="sidenav-trigger right"><i className="fas fa-bars"></i></a>
        <ul className="right hide-on-med-and-down nav-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
        <ul id="mobile-demo" className="sidenav">
          <li><a href="#home" className='sidenav-close'>Home</a></li>
          <li><a href="#about" className='sidenav-close'>About</a></li>
          <li><a href="#gallery" className='sidenav-close'>Gallery</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
