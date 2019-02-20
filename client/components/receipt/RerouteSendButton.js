import React, { Component } from "react";
import {withRouter} from "react-router-dom";

/*
This class creates the Button that redirects to the Send page
*/

class RerouteSendButton extends Component {
  async handleClick(event) {
    //TODO: Clem: find better way to reroute
    //TODO: Clem: find way to reroute and only pass the important params (Contract address) to window.location.search
    window.location.pathname = "send/:"
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

export default withRouter(RerouteSendButton);
