import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
const axios = require('axios');

class LoginForm extends React.Component {
  register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('about to register, username is ', username, password);
    axios.post('/register', {
      username,
      password,
    });
  }

  login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('about to login, username is ', username, password);

    axios.post('/login', {
      username,
      password,
    });
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
                this.login();
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

export default LoginForm;
