import React from 'react';
import axios from 'axios';
import { Card, Table, Button } from 'react-bootstrap';
import Navigationbar from '../../components/Header/Navigationbar';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

/*
Defines the Login page of the app
*/

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'anon',
    };
  }

  // TODO: remove function
  async getUsername() {
    const response = await axios.get('/username');
    console.log('username being fetched: response is', response);
    console.log('response.data is', response.data);

    this.setState({ username: response.data });
  }

  // TODO: remove function
  async reloadUsername() {
    const response = await axios.get('/username');
    console.log('username being fetched:', response);
    this.setState({ username: response });
  }

  componentDidMount() {
    this.getUsername();
  }

  render() {
    return (
      <div>
        <Navigationbar />
        <LoginForm />
        <Button
          variant="dark"
          className="ContractButton"
          onClick={this.reloadUsername}
        >
          Find Username
        </Button>
        <p>current username is {this.state.username}</p>
      </div>
    );
  }
}

export default Login;
