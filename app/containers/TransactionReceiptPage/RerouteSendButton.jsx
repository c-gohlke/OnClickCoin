import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import history from '../../utils/history';

/*
This class creates the Button that redirects to the Send page
*/

class RerouteSendButton extends Component {
  async handleClick() {
    history.push(`/send`);
  }

  render() {
    return (
      <div>
        <Button variant="dark" onClick={this.handleClick}>
          Send to someone
        </Button>
        <br />
        <br />
      </div>
    );
  }
}

export default RerouteSendButton;
