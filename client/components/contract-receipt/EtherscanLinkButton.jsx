import React, { Component } from 'react';

/*
This class creates the EtherscanLinkButton Component
*/

class EtherscanLinkButton extends Component {
  static handleClick() {
    /*
    Given URL is of the form pathame/receipt/: {network name} + "?" + {accountID}
    */

    const netinfo = String(window.location).split('netname:')[1];
    const netname = netinfo.split('?')[0];

    const addrinfo = String(window.location).split('address:')[1];
    const accID = addrinfo.split('?')[0];

    const link = `https://${netname}.etherscan.io/address/${accID}`;

    window.open(link);
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick.bind(this)}>
        Find your transaction receipt!
      </button>
    );
  }
}

export default EtherscanLinkButton;
