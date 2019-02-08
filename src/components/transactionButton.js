import React, { Component } from "react";
import sendMoney from "../utils/sendMoney";
import sendMetaMoney from "../utils/sendMetaMoney";
import {
  sendAddress,
  sendPrivKey,
  receiveAddr,
  gasPrice,
  gasLimit,
  sendAmount
} from "../config/config";

class TransactButton extends Component {
  handleClick(event) {
    const formInfo = document.getElementById("sendForm");
    const payerList = document.getElementById("paymentMethod");
    var payer = parseInt(payerList.options[payerList.selectedIndex].value);
    console.log("payer is", payer)
    if (payer===0) {
      const senderAccID = formInfo[0].value || sendAddress;
      const receiveAccID = formInfo[1].value || receiveAddr;
      const senderPrivateKey = formInfo[2].value || sendPrivKey;
      const gasP = formInfo[3].value.toString() || gasPrice;
      const gasL = formInfo[4].value.toString() || gasLimit;
      const sendA = formInfo[5].value.toString() || sendAmount;
      sendMoney(senderAccID, receiveAccID, senderPrivateKey, gasP, gasL, sendA);
    }
    else if(payer===1){
      const receiveAccID = formInfo[1].value || receiveAddr;
      const gasP = formInfo[3].value.toString() || gasPrice;
      const gasL = formInfo[4].value.toString() || gasLimit;
      const sendA = formInfo[5].value.toString() || sendAmount;
      sendMetaMoney(receiveAccID, gasP, gasL, sendA)
    }
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Send the transaction!
      </button>
    );
  }
}

export default TransactButton;
