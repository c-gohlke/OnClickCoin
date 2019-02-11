import React, { Component } from "react";
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
        Click here to create your coin!
      </button>
    );
  }
}

export default DeployButton;
