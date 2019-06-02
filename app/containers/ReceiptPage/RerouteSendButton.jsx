import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

/*
This class creates the Button that redirects to the Send page
*/

class RerouteSendButton extends Component {
  async handleClick() {
    const url = String(window.location);
    const parseContractAddress = url.split('address:')[1];
    const contractAddress = parseContractAddress.split('?tokenname')[0];

    window.location.replace(
      `${window.location.origin}/send?${contractAddress}`,
    );
  }

  render() {
    return (
      <div>
        <Button variant="dark" onClick={this.handleClick.bind(this)}>
          Send to someone
      </ Button>
        <br />
        <br />
      </div>
    );
  }
}

export default RerouteSendButton;
