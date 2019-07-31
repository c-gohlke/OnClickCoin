import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import deployContract from '../../utils/deployContract';

/*
This class creates the DeployButton Component
*/

class DeployButton extends React.Component {
  async handleClick() {
    /*
    fetch constructor information from the contract form
    contract form is defined in server/api/ContractForm
    */
    const symbol = document.getElementById('symbol');
    const name = document.getElementById('name');
    const supply = document.getElementById('supply');
    const decimals = document.getElementById('decimals');
    const netID = document.getElementById('netID');

    let nameValue = 'BATman Coin'; // if advanced settings undefined, use default value of "BATman Coin"
    if (name.value) {
      nameValue = name.value;
    }

    let symbolValue = 'BAT'; // if advanced settings undefined, use default value of "BAT"
    if (symbol.value) {
      symbolValue = symbol.value;
    }
    let decimalsValue = 18; // if advanced settings undefined, use default value of 18
    if (decimals) {
      decimalsValue = decimals.value;
    }

    let netIDValue = 4; // if advanced settings undefined, use default value of 2
    if (netID) {
      netIDValue = parseInt(document.getElementById('netID').value, 10);
    }

    let supplyValue = 10000; // if advanced settings undefined, use default value of 10000
    if (supply) {
      supplyValue = supply.value;
    }

    deployContract(
      symbolValue,
      nameValue,
      decimalsValue,
      supplyValue,
      netIDValue,
    );
  }

  render() {
    const { handleToUpdate } = this.props;
    const { handleClick } = this;
    return (
      <>
        <Button
          variant="warning"
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

DeployButton.propTypes = {
  handleToUpdate: PropTypes.func,
};

export default DeployButton;
