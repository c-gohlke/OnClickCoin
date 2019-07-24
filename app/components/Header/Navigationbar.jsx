import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import anon from '../../images/anon.jpg';

import { getUser } from '../../redux/selectors/selectors';

function mapStateToProps(state) {
  const user = getUser(state);

  // component receives additionally:
  return { user };
}

const Navigationbar = ({ user }) => (
  <>
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Navbar.Brand href="/">OnClickCoin!</Navbar.Brand>
        <Nav.Link href="/send">Send</Nav.Link>
        <Nav.Link href="/ico">ICO</Nav.Link>
        <Nav.Link href="/info">Info</Nav.Link>
        <Nav.Link href="/data">Data</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" />
        &nbsp;&nbsp;&nbsp;
      </Form>
      <Nav>
        <Navbar.Brand href="/profile">
          {' '}
          <Image
            roundedCircle
            src={anon}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Profile logo"
          />
        </Navbar.Brand>
      </Nav>
      &nbsp;
      <Button variant="outline-primary" href="/login">
        Login/Register {user.username}
      </Button>
      &nbsp;
      <Button variant="outline-primary" href="/logout">
        Logout
      </Button>
    </Navbar>
  </>
);

Navigationbar.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps)(Navigationbar);
