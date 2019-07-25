import React from 'react';
import './Navigationbar.css';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  NavDropdown,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import anon from '../../images/anon.jpg';
import history from '../../utils/history';
import logout from '../../redux/actions/logout';

import { getUser } from '../../redux/selectors/selectors';

function mapStateToProps(state) {
  const user = getUser(state);
  // component receives additionally:
  return { user };
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

class Navigationbar extends React.Component {
  logout() {
    const res = axios.get('/logout');
    history.push(res);
    this.props.logout();
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand
              onClick={() => {
                history.push('/');
              }}
            >
              OnClickCoin!
            </Navbar.Brand>
            <Nav.Link
              onClick={() => {
                history.push('send');
              }}
            >
              Send
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                history.push('ico');
              }}
            >
              ICO
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                history.push('info');
              }}
            >
              Info
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                history.push('data');
              }}
            >
              Data
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" />
            &nbsp;&nbsp;&nbsp;
          </Form>
          <Nav>
            <NavDropdown
              title={
                <Image
                  roundedCircle
                  src={anon}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="Profile"
                />
              }
              id="nav-dropdown"
            >
              <NavDropdown.Item>{this.props.user.username}</NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  history.push('login');
                }}
              >
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  this.logout();
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </>
    );
  }
}

Navigationbar.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
  logout: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigationbar);
