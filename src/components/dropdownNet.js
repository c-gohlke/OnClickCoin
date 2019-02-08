import React, { Component } from "react";
import SendForm from "./sendForm";

class DropdownNet extends Component {
  render() {
    return (
      <div>
          <h4>Choose your network</h4>
        <select id="network">
            <option value="0" defaultChecked>rinkeby</option>
            <option value="1">kovan</option>
            <option value="2">ropsten</option>
            <option value="3">mainnet</option>
        </select>
          <br/>
          <br/>
          <h4>Choose metamask for main net</h4>
        <select id="paymentMethod">
            <option value="0" defaultChecked>configFile</option>
            <option value="1">metamask</option>
        </select>
      </div>
    );
  }
}

export default DropdownNet;
