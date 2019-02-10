import React, { Component } from "react";
import deployContract from "../utils/deployContract";
import deployMetaContract from "../utils/deployMetaContract";

class DeployButton extends Component {
  handleClick(event) {
    const formInfo = document.getElementById("constructorForm");
    const name = formInfo[0].value;
    const supply = formInfo[1].value;
    deployMetaContract(name, supply)
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
