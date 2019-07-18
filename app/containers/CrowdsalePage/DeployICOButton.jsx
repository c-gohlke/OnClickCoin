import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import deployCrowdsale from './deployCrowdsale';

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
    // gets permission from metamask to access accountsand other info
    deployCrowdsale(rateValue, walletValue, ierc20Value);
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
