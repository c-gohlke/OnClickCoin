import React, { Component } from "react";
import deployContract from "../utils/deployContract";

class DeployButton extends Component {
  handleClick(event) {
    deployContract();
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>Click here to deploy your new Contract!</button>;
  }
}

export default DeployButton;
