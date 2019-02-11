import React, { Component } from "react";

class LinkButton extends Component {

  handleClick(event) {
    var parsedInfo = String(window.location).split("giveaway/:");
    parsedInfo = parsedInfo.pop();
    parsedInfo = parsedInfo.split("?");
    const netname = parsedInfo[0];
    const accID = parsedInfo[1];
    console.log("accId is ", accID);
    console.log(
      "link is ",
      "https://" + netname + ".etherscan.io/address/" + accID
    );
    const link = "https://" + netname + ".etherscan.io/address/" + accID;
    window.open(link);
  }

  render() {
    return (

        <button onClick={this.handleClick.bind(this)}>
          Find your transaction receipt!
        </button>

    );
  }
}

export default LinkButton;
