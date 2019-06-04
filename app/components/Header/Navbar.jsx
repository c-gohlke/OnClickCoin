import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => (
  <Nav variant="tabs" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/Send">Send</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="info?metamask">Info</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Navbar;
