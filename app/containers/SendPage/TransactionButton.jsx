import React, { Component } from 'react';
import transferToken from '../../../server/api/transferToken';
import Button from 'react-bootstrap/Button';

/*
This class creates the TransactionButton Component for the send page
*/

class TransactionButton extends Component {
  handleClick() {
    // fetch the information that has been filled in the
    // TransactionFrom, defined in client/components/send/TransactionForm
    const formInfo = document.getElementById('TransactionForm');
    const contractAddress = formInfo[0].value;
    const recipientAddress = formInfo[1].value;
    const amount = formInfo[2].value;
    transferToken(contractAddress, recipientAddress, amount);
  }

  render() {
    return (
      <Button variant="dark" onClick={this.handleClick.bind()}>
        Click here to send your coin
      </ Button>

    );
  }
}

export default TransactionButton;
