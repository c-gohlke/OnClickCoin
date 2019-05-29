import React, { Component } from 'react';

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

    /* The URL of the send page is of the form:
    pathname /send/: {contractID}
    */

    // this creates an array, with array[0] everything before "send/:", and array[1] everything after "send/:"
    const parsedInfo = String(window.location.href).split('send?');
    const contractID = String(parsedInfo[1]).split('?')[0];
    this.state = { contractID };
  }

  render() {
    return (
      <div>
        <form id="TransactionForm">
          <br />
Enter your contract address
          <br />
          <br />
          <input
            id="contract"
            placeholder={this.state.contractID}
          />
          <br />
          <br />
Enter your friend address
          <br />
          <br />
          <input id="to" placeholder="0xabc123" />
          <br />
          <br />
How many coins should be sent?
          <br />
          <br />
          <input
            id="amount"
            placeholder="1"
            type="number"
          />
          <br />
        </form>
      </div>
    );
  }
}
export default TransactionForm;
