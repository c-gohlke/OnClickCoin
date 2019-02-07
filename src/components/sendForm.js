import React, { Component } from "react";

class SendForm extends Component {
  render() {
    return (
      <div>
        <form id="sendForm">
        <input type="text" name="sendAccID" placeholder="sender account ID"></input><br></br>
        <input type="text" name="receiveAccID" placeholder="receiver's account ID"></input><br></br>
        <input type="text" name="senderPrivateKey" placeholder="sender's private key"></input><br></br>
        <input type="text" name="gasPrice" placeholder="Gas Price"></input><br></br>
        <input type="text" name="gasLimit" placeholder="Gas Limit"></input><br></br>
        <input type="text" name="sendAmount" placeholder="Send Amount in ETH"></input><br></br>
        </form>
      </div>
    );
  }
}

export default SendForm;
