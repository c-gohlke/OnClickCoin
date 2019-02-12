import React, { Component } from "react";
import styles from "../styles/styles";
import LinkButton from "../../components/receipt/EtherscanLinkButton.js";
import SendButton from "../../components/receipt/RerouteSendButton.js";

class ContractReceipt extends Component {
  state = {

    /*the name and the Supply's information of the token are passed on through the URL.

    The URL's form is:
    pathname/receipt/: { name of the net } ? { sender's address } ? { name of the token } ? {initial supply }

    This URL is created by deployErc20Contract() function in src/utils/deployErc20Contract
    */

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
          Press here to send some of your tokens to friends!!!:
          <br />
          <br />
          <SendButton />
        </div>
      </div>
    );
  }
}

export default ContractReceipt;
