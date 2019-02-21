import React, { Component } from "react";
import deployContract from "../../../server/api/deployContract";

/*
This class creates the DeployButton Component
*/

class DeployButton extends Component {
  handleClick(event) {
    /*
    fetch constructor information from the contract form
    contract form is defined in server/api/ContractForm
    */
    const formInfo = document.getElementById("ContractForm");
    const symbol = formInfo[0].value;
    const name = formInfo[1].value;
    const decimals = formInfo[2].value;
    const supply = formInfo[3].value;
    deployContract(symbol, name, decimals, supply)
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Click here to create your coin!
      </button>
    );
  }
}

export default DeployButton;
