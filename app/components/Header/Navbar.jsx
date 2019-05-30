import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <a href="/">Home</a>
    <a href="/Send">Send</a>
    <div className="dropdown">
      <button type="button" className="dropbtn">
        Info
        <i className="fa fa-caret-down" />
      </button>
      <div className="dropdown-content">
        <a href="info?metamask">Metamask</a>
      </div>
    </div>
  </div>
);

export default Navbar;
