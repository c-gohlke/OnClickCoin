import React, { Component } from "react";
import deployContract from "../utils/deployContract";
import deployMetaContract from "../utils/deployMetaContract";

class DeployButton extends Component {
  handleClick(event) {
    const payerList = document.getElementById("paymentMethod");
    var payer = parseInt(payerList.options[payerList.selectedIndex].value);
    console.log("payer is", payer)
    if(payer===0){
      deployContract();
    }
    else if(payer===1){
      deployMetaContract()
    }
    else{
      console.log("payer value problem")
    }
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>Click here to deploy your new Contract!</button>;
  }
}

export default DeployButton;
