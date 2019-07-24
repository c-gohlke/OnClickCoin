import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import login from '../../redux/actions/login';

const axios = require('axios');

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(login(username)),
});

class LoginForm extends React.Component {
  register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    axios.post('/register', {
      username,
      password,
    });
  }

  login(username) {
    const password = document.getElementById('password').value;

    axios.post('/login', {
      username,
      password,
    });

    this.props.login(username);
  }

  render() {
    return (
      <Card style={{ background: 'white' }}>
        <Card.Body>
          <Card.Title>Log in/Register</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" id="username" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id="password" />
            </Form.Group>
            <Button
              variant="dark"
              className="LoginButton"
              onClick={() => {
                this.login(document.getElementById('username').value);
              }}
            >
              Log in
            </Button>
            &nbsp;
            <Button
              inline="true"
              variant="dark"
              className="RegisterButton"
              onClick={() => {
                this.register();
              }}
            >
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);
