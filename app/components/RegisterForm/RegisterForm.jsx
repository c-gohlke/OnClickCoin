import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const RegisterForm = () => (
  <Card style={{ background: 'white' }}>
    <Card.Body>
      <Card.Title>Register</Card.Title>
      <Form action="/register" method="post">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <div>
          <input type="submit" value="Register" />
        </div>
      </Form>
    </Card.Body>
  </Card>
);

export default RegisterForm;
