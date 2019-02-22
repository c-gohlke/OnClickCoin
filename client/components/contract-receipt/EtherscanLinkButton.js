import React, { Component } from "react";

/*
This class creates the EtherscanLinkButton Component
*/

class EtherscanLinkButton extends Component {
  handleClick(event) {

    /*
    Given URL is of the form pathame/receipt/: {network name} + "?" + {accountID}
    TODO: Clem: form?
    TODO: find better way to pass the information. Security issues maybe?? (accountID accessible to attacker if in the URL?)
    */

    //splits the URL in an array with 2 values
    // array[0]'s value is everything before "receipt/:"
    //array[1]'s value
    var parsedInfo = String(window.location).split("receipt/:");

    //removes "localhost:......" from the array
    //resulting value is everything following "receipt/:"
    parsedInfo = parsedInfo.pop();

    //All the parameters are separated by a "?" in the URL
    //This splits the params in an array
    parsedInfo = parsedInfo.split("?");
    const netname = parsedInfo[0];
    const accID = parsedInfo[1];
    const link = "https://" + netname + ".etherscan.io/address/" + accID;
    
    //open the link in a new tab
    window.open(link)
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Find your transaction receipt!
      </button>
    );
  }
}

export default EtherscanLinkButton;
