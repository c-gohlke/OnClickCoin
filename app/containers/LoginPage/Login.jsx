import React from 'react';
import axios from 'axios';
import Navigationbar from '../../components/Header/Navigationbar';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

/*
Defines the Login page of the app
*/

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'anonymous',
    };
  }

  // TODO: use redux to store username
  async getUsername() {
    const response = await axios.get('/currentUser');
    this.setState({ username: response.data });
  }

  componentDidMount() {
    this.getUsername();
  }

  render() {
    return (
      <div>
        <Navigationbar />
        <LoginForm />
        <p>current username is {this.state.username}</p>
      </div>
    );
  }
}

export default Login;
