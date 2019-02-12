import React, { Component } from "react";
import {withRouter} from "react-router-dom";


class SendButton extends Component {
  handleClick(event) {
    var parsedInfo = String(window.location).split("?");
    const accID = parsedInfo[4];
    const link = "localhost:3000/send/:" + accID;
    console.log("in send button link")
    this.props.history.push(link);
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

export default withRouter(SendButton);
