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

    const link = `${window.location.origin}/send?${contractAddress}`;
    window.open(link);
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
