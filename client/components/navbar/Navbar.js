import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/Send">Send</a>
        <div className="dropdown">
          <button className="dropbtn">
            Info
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <a href="info?metamask">Metamask</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
