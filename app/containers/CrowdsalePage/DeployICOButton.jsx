import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import deployCrowdsale from '../../utils/deployCrowdsale';

/*
This class creates the DeployButton Component
*/

class DeployICOButton extends Component {
  async handleClick() {
    const rateValue = document.getElementById('rate').value;
    const walletValue = document.getElementById('wallet').value;
    const ierc20Value = document.getElementById('ierc20').value;
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
