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
    {/*
      console.log("hello")
    const formInfo = document.getElementsByClassName('TransactionForm');
    console.log("hello 1")
    const contractAddress = formInfo[0].value;
    console.log("hello 2")
    const recipientAddress = formInfo[1].value;
    const amount = formInfo[2].value;
    transferToken(contractAddress, recipientAddress, amount);
    
    
    */}

    const contractAddress = document.getElementById('contract').value;
    console.log(contractAddress);
    const recipientAddress = document.getElementById('to').value;
    console.log("hello 3");
    const amount = document.getElementById('amount').value;
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
