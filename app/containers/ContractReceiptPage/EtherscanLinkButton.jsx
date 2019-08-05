import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

/*
This class creates the EtherscanLinkButton Component
*/

class EtherscanLinkButton extends Component {
  handleClick() {
    /*
    Given URL is of the form pathame/receipt/: {network name} + "?" + {accountID}
    */

    const netinfo = String(window.location).split('netname:')[1];
    const netname = netinfo.split('?')[0];

    const addrinfo = String(window.location).split('address:')[1];
    const accID = addrinfo.split('?')[0];

    const link = `https://${netname}.etherscan.io/token/${accID}`;
    window.open(link);
  }

  render() {
    return (
      <Button variant="dark" onClick={this.handleClick}>
        See your coin page
      </Button>
    );
  }
}

export default EtherscanLinkButton;
