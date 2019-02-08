import React, { Component } from "react";

class DropdownNet extends Component {
  render() {
    return (
      <div>
        <select id="network">
            <option value="0" defaultChecked>rinkeby</option>
            <option value="1">kovan</option>
            <option value="2">ropsten</option>
        </select>
        <select id="paymentMethod">
            <option value="0" defaultChecked>configFile</option>
            <option value="1">metamask</option>
        </select>
      </div>
    );
  }
}

export default DropdownNet;
