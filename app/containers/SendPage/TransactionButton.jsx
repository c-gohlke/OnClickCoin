import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import transferToken from '../../utils/transferToken';
import PropTypes from 'prop-types';
import { abiERC20 } from '../../../contracts/erc20';
const Web3 = require('web3');

/*
This class creates the TransactionButton Component for the send page
*/

// TODO: default netID to network of created contract. Right now hardcoded to default to rinkeby
class TransactionButton extends Component {
  async handleClick() {
    const contractAddress = document.getElementById('contract').value;
    const recipientAddress = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;
    const netID = document.getElementById('netID');
    console.log(abiERC20)
    const contractInstance = new web3.eth.Contract(abiERC20, contractAddress);
    const foundDecimals = await contractInstance.methods.decimals().call();

    let netIDValue = 4; // if advanced settings undefined, use default value of 2
    if (netID) {
      netIDValue = parseInt(document.getElementById('netID').value, 10);
    }

    //TODO: find decimals and correct the amount given. Weird web3 is not a constructor error
    const correctedAmount = amount*Math.pow(10, foundDecimals)
    transferToken(contractAddress, recipientAddress, amount, netIDValue);
  }

  render() {
    const { handleToUpdate } = this.props;
    const { handleClick } = this;
    return (
      <Button variant="dark" onClick={() => {
        handleClick();
        handleToUpdate();
      }}>
        Click here to send your coin
      </Button>
    );
  }

}

TransactionButton.propTypes = {
  handleToUpdate: PropTypes.func,
};

export default TransactionButton;
