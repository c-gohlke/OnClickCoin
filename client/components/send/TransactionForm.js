import React, { Component } from "react";
import TransactButton from "../../components/send/TransactionButton";

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
    var parsedInfo = String(window.location.href).split("send?");
    const contractID = String(parsedInfo[1]).split("?")[0];
    this.state = { contractID: contractID };
  }

  render() {
    return (
      <div>
        <form className='form' id="TransactionForm">
          <label for="contract">Enter your contract address</label>
          <input
            id="contract"
            type='text'
            placeholder={this.state.contractID}
          />
          <label for='to'>Enter your friend address</label>
          <input id="to" type='text' placeholder="0xabc123"/>
          <label for='amount'>How many coins should be sent?</label>
          <input
            id="amount"
            placeholder="1"
            type="number"
          />
          <br />
          <TransactButton />
        </form>
      </div>
    );
  }
}
export default TransactionForm;
