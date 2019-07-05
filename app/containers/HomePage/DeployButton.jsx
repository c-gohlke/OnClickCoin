import React from 'react';
import Button from 'react-bootstrap/Button';
import deployContract from '../../../server/api/deployContract';

/*
This class creates the DeployButton Component
*/

class DeployButton extends React.Component {
  async handleClick() {
    /*
    fetch constructor information from the contract form
    contract form is defined in server/api/ContractForm
    */
    const symbolValue = document.getElementById('symbol').value;
    const nameValue = document.getElementById('name').value;
    const supply = document.getElementById('supply');
    const decimals = document.getElementById('decimals');

    let decimalsValue = 2; // if advanced settings undefined, use default value of 2
    if (decimals) {
      decimalsValue = decimals.value;
    }

    let supplyValue = 10000; // if advanced settings undefined, use default value of 10000
    if (supply) {
      supplyValue = supply.value;
    }

    // gets permission from metamask to access accounts and other info
    deployContract(symbolValue, nameValue, decimalsValue, supplyValue);
  }

  render() {
    const { handleToUpdate } = this.props;
    const { handleClick } = this;
    return (
      <>
        <Button
          variant="dark"
          className="ContractButton"
          onClick={() => {
            handleClick();
            handleToUpdate();
          }}
        >
          Click here to create your coin
        </Button>
      </>
    );
  }
}

export default DeployButton;
