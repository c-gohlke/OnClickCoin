import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => (
  <Nav variant="tabs" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='/Send'>Send</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='info?metamask'>Info</Nav.Link>
    </Nav.Item>
  </Nav>

);

{/*
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
  
  
  
  */}

export default Navbar;
