import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Navigationbar = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Navbar.Brand href="/">OnClickCoin</Navbar.Brand>
        <Nav.Link href="/send">Send</Nav.Link>
        <Nav.Link href="/ico">ICO</Nav.Link>
        <Nav.Link href="/info">Info</Nav.Link>
        <Nav.Link href="/data">Data</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" />
        &nbsp;&nbsp;&nbsp;
      </Form>
      <Button variant="light" href="/login">
      Login/Register
      </Button>
      &nbsp;
      <Button variant="light" href="/logout">
        Logout
      </Button>
    </Navbar>
  </>
);

export default Navigationbar;
