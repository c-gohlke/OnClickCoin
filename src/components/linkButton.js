import React, { Component } from "react";
import {withRouter} from "react-router-dom";

class LinkButton extends Component {
  handleClick(event) {
    var parsedInfo = String(window.location).split("giveaway/:");
    parsedInfo = parsedInfo.pop();
    parsedInfo = parsedInfo.split("?");
    const netname = parsedInfo[0];
    const accID = parsedInfo[1];
    console.log("in link button link")
    console.log("accId is ", accID);
    console.log(
      "link is ",
      "https://" + netname + ".etherscan.io/address/" + accID
    );
    const link = "https://" + netname + ".etherscan.io/address/" + accID;

    this.props.history.push(link);
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Find your transaction receipt!
      </button>
    );
  }
}

export default withRouter(LinkButton);
