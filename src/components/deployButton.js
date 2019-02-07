import React, { Component } from "react";
import deployContract from "../utils/deployContract";

class DeployButton extends Component {
  handleClick(event) {
    deployContract();
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>Click here to deploy your new Contract! (and get error messages)</button>;
  }
}

export default DeployButton;
