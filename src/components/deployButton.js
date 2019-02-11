import React, { Component } from "react";
import deployErc20Contract from "../utils/deployErc20Contract";


class DeployButton extends Component {
  handleClick(event) {
    const formInfo = document.getElementById("constructorForm");
    const symbol = formInfo[0].value;
    const name = formInfo[1].value;
    const decimals = formInfo[2].value;
    const supply = formInfo[3].value;


    deployErc20Contract(name, supply)
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
