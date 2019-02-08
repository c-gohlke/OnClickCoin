import React, { Component } from "react";
import deployContract from "../utils/deployContract";
import deployMetaContract from "../utils/deployMetaContract";

class DeployButton extends Component {
  handleClick(event) {
    const formInfo = document.getElementById("constructorForm");
    const name = formInfo[0].value;
    const ticker = formInfo[1].value;
    const owner = formInfo[2].value;
    const supply = formInfo[3].value;

    const payerList = document.getElementById("paymentMethod");
    var payer = parseInt(payerList.options[payerList.selectedIndex].value);
    console.log("payer is", payer);

    if (payer === 0) {
      deployContract(name, ticker, owner, supply);
    } else if (payer === 1) {
      deployMetaContract(name, ticker, owner, supply);
    } else {
      console.log("payer value problem");
    }
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Click here to deploy your new Contract!
      </button>
    );
  }
}

export default DeployButton;
