import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import deployCrowdsale from '../../utils/deployCrowdsale';
import { abiERC20 } from '../../../contracts/erc20';
import PropTypes from 'prop-types';
const Web3 = require('web3');
import ky from 'ky';


/*
This class creates the DeployButton Component
*/

class DeployICOButton extends Component {
  async handleClick() {
    const dollarsInput = document.getElementById('rate').value;
    console.log("dollars input", dollarsInput)

    const walletValue = document.getElementById('wallet').value;
    const ierc20Value = document.getElementById('ierc20').value;
    const contractInstance = new web3.eth.Contract(abiERC20, ierc20Value);
    const foundDecimals = await contractInstance.methods.decimals().call();
    const foundSupply = await contractInstance.methods.totalSupply().call()
    console.log("found supply",foundSupply)
    console.log("found decimals", foundDecimals)

    const res = await ky.get('https://api.cryptonator.com/api/ticker/eth-usd').json();
    const priceEth = res.ticker.price
    console.log("found price", priceEth)

    const totalBits = foundSupply
    const raiseInUSD = (foundSupply*dollarsInput)/Math.pow(10, foundDecimals)
    const raiseInEth = raiseInUSD/priceEth
    const raiseInWei = raiseInEth*Math.pow(10,18)
    var rateWei = foundSupply/raiseInWei
    console.log("our rate",rateWei)

    rateWei = Math.floor(rateWei)
    console.log("Do we have a good rate?", rateWei) 
    deployCrowdsale(rateWei, walletValue, ierc20Value);
    
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
          Click here to create your ICO
        </Button>
      </>
    );
  }
}

DeployICOButton.propTypes = {
  handleToUpdate: PropTypes.func,
};

export default DeployICOButton;
