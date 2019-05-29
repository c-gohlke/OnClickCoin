import React, { Component } from "react";

/*
This class creates the Button that redirects to the Send page
*/

class RerouteSendButton extends Component {
  async handleClick(event) {
    const url = (String(window.location))
    const parseContractAddress = url.split("address:")[1]
    const contractAddress = parseContractAddress.split("?tokenname")[0]    

    window.location.replace(
      window.location.origin + "/send?" + contractAddress
    );
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

export default RerouteSendButton;
