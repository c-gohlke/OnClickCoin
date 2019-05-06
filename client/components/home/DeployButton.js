import React, { Component } from "react";
import deployContract from "../../../server/api/deployContract";
import getPermission from "../../../server/api/getPermission";
import "./DeployButton.css"

/*
This class creates the DeployButton Component
*/

class DeployButton extends Component {
  async handleClick(event) {
    /*
    fetch constructor information from the contract form
    contract form is defined in server/api/ContractForm
    */
    const formInfo = document.getElementById("ContractForm");
    const symbol = formInfo[0].value;
    const name = formInfo[1].value;
    const decimals = formInfo[2].value;
    const supply = formInfo[3].value;

    //gets permission from metamask to access accounts and other info
    await getPermission()

    deployContract(symbol, name, decimals, supply)
  }

  render() {
    return (
      <button className = "ContractButton" onClick={this.handleClick.bind(this)}>
        Deploy Contract
      </button>
    );
  }
}

export default DeployButton;
