import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import transferToken from '../../utils/transferToken';

/*
This class creates the TransactionButton Component for the send page
*/

// TODO: default netID to network of created contract. Right now hardcoded to default to rinkeby
class TransactionButton extends Component {
  handleClick() {
    const contractAddress = document.getElementById('contract').value;
    const recipientAddress = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;
    const netID = document.getElementById('netID');

    let netIDValue = 4; // if advanced settings undefined, use default value of 2
    if (netID) {
      netIDValue = parseInt(document.getElementById('netID').value, 10);
    }

    transferToken(contractAddress, recipientAddress, amount, netIDValue);
  }

  render() {
    return (
      <Button variant="dark" onClick={this.handleClick}>
        Click here to send your coin
      </Button>
    );
  }
}

export default TransactionButton;
