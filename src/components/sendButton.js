import React, { Component } from "react";
const Web3 = require("web3");

class LinkButton extends Component {
  handleClick(event) {
    var parsedInfo = String(window.location).split("?");
    const accID = parsedInfo[4];
    // console.log("event handled")
    // const link = "localhost:3000/send/:" + accID;
    // window.open("localhost:3000/send/:");
    // window.location.assign("localhost:3000/send/:");
    // window.location.replace("localhost:3000/send/:");
    const link = "localhost:3000/send/:" + accID;
    window.open(link);
    // document.location.href = "localhost:3000/send/:"
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Send it!</button>
        <br />
        <br />
      </div>
    );
  }
}

export default LinkButton;
