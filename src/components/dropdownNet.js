import React, { Component } from "react";

class DropdownNet extends Component {
  render() {
    return (
      <div>
        <select id="network">
          <option value="0" defaultChecked>rynkeby</option>
          <option value="1">kovan</option>
        </select>
      </div>
    );
  }
}

export default DropdownNet;
