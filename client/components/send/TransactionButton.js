import React, { Component } from "react";
import transferToken from "../../../server/api/transferToken"

/*
This class creates the TransactionButton Component for the send page
*/

class TransactionButton extends Component {
  handleClick(event) {
    //fetch the information that has been filled in the TransactionFrom, defined in client/components/send/TransactionForm
    const formInfo = document.getElementById("TransactionForm");
    const contractAddress = formInfo[0].value;
    const recipientAddress = formInfo[1].value;
    const amount = formInfo[2].value;
    transferToken(contractAddress, recipientAddress, amount)
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Send to your friend!
      </button>
    );
  }
}

export default TransactionButton;
