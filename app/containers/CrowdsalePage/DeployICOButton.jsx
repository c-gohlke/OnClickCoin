import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import deployContract from '../../../server/api/deployContract';
import deployICO from '../../../server/api/deployIco';

/*
This class creates the DeployButton Component
*/

class DeployICOButton extends Component {
  async handleClick() {
    /*
        fetch constructor information from the contract form
        contract form is defined in server/api/ContractForm
        */
    const rateValue = document.getElementById('rate').value;
    const walletValue = document.getElementById('wallet').value;
    const ierc20Value = document.getElementById('ierc20').value;
    console.log('got values', rateValue, walletValue, ierc20Value);

    // gets permission from metamask to access accounts and other info
    deployICO(rateValue, walletValue, ierc20Value);
  }

  render() {
    return (
      <>
        <Button
          variant="dark"
          className="ContractButton"
          onClick={this.handleClick}
        >
          Click here to create your ICO
        </Button>
      </>
    );
  }
}

export default DeployICOButton;
