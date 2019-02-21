import React, { Component } from "react";
import styles from "../../views/styles/styles";

/*
This class creates the TransactionForm Component for the send page
The form takes 3 inputs:
- the contract address
Defaulted to the address of the contract that has been created from the Home Page

- the recipient address
- the amount of tokens to be sent
*/

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    //TODO: Clem: find better/safer way to pass the contract ID to new route

    /*The URL of the send page is of the form:
    pathname /send/: {contractID}
    */

    //this creates an array, with array[0] everything before "send/:", and array[1] everything after "send/:"
    var parsedInfo = String(window.location.href).split("send/:?");
    const contractID = String(parsedInfo[1]).split("?")[0];
    this.state = { contractID: contractID };
  }

  render() {
    return (
      <div style={styles.General}>
        <form id="TransactionForm">
          <br />Enter your contract address <br />
          <br />
          <input
            id="contract"
            placeholder={this.state.contractID}
            style={styles.InputStyle}
          />
          <br />
          <br />Enter your friend address <br />
          <br />
          <input id="to" placeholder="0xabc123" style={styles.InputStyle} />
          <br />
          <br />How many coins should be sent?
          <br />
          <br />
          <input
            id="amount"
            placeholder="1"
            type="number"
            style={styles.InputStyle}
          />
          <br />
        </form>
      </div>
    );
  }
}
export default TransactionForm;
