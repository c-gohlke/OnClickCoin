import React, { Component } from "react";

class LinkButton extends Component {
  state = {
    name: String(window.location).split("?")[2],
    supply: String(window.location).split("?")[3]
  };

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
      <div>
        <br />
        <div className="receipt">Your Token info:</div>
        <br />
        <table width="100%" border="1">
          <tbody>
            <tr>
              <td>Name:</td>
              <td> {this.state.name}</td>
            </tr>
            <tr>
              <td>Current supply:</td>
              <td> {this.state.supply}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <button onClick={this.handleClick.bind(this)}>
          Find your transaction receipt!
        </button>
        <br />
      </div>
    );
  }
}

export default LinkButton;
