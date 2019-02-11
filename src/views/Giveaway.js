import React, { Component } from "react";
import styles from "../style/styles";
import LinkButton from "../components/linkButton.js";
import SendButton from "../components/sendButton.js";

class Giveaway extends Component {
  state = {
    name: String(window.location).split("?")[2],
    supply: String(window.location).split("?")[3]
  };

  render() {
    return (
      <div style={styles.General}>
        <br />
        <br />

        <br />
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
        <div>
          <br />
          Your contract has been successfully created! Link to your transaction
          receipt:
          <br />
          <br />
          <LinkButton />
        </div>
        <br />
        <br />
        <div>
          <br />
          Press here to send same of your tokens to friends!!!:
          <br />
          <br />
          <SendButton />
        </div>
      </div>
    );
  }
}

export default Giveaway;
