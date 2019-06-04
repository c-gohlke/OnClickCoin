import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import transferToken from '../../../server/api/transferToken';

/*
This class creates the TransactionButton Component for the send page
*/

class TransactionButton extends Component {
  handleClick() {
    const contractAddress = document.getElementById('contract').value;
    const recipientAddress = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;
    transferToken(contractAddress, recipientAddress, amount);
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
