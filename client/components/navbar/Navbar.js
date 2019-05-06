import React, { Component } from "react";
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <a className='button' href="/">Home</a>
        <a className='button' href="/Send">Send</a>
        <a className='button' href="info">Info</a>
      </div>
    );
  }
}

export default Navbar;
