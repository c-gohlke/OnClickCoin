import React, { Component } from "react";
import transferErc20Token from "../utils/transferErc20Token"


class TransactButton extends Component {
  handleClick(event) {
    const formInfo = document.getElementById("transferForm");
    const contractAddress = formInfo[0].value;
    const toAddress = formInfo[1].value;
    const amount = formInfo[2].value;
    transferErc20Token(contractAddress, toAddress, amount)



  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Send to your friend!
      </button>
    );
  }
}

export default TransactButton;
