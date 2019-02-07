import React, { Component } from "react";
import sendMoney from "../utils/sendMoney";

class Button extends Component {
  handleClick(event) {
    sendMoney();
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>Click here</button>;
  }
}

export default Button;
