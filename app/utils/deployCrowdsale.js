import {
  bytecodeCrowdsale,
  abiConstructorCrowdwsale,
} from '../../contracts/ICO/crowdsale';
import getPermission from './getPermission';
import netIDtoName from './netIDtoName';

const axios = require('axios');
const Web3 = require('web3');

async function deployCrowdsale(rate, wallet, ierc20) {
  if (typeof web3 !== 'undefined') {
    await getPermission();
    window.web3 = new Web3(window.ethereum);
    // Create the data for the deploy transaction encoding the
    // arguments of the constructor with the constructor item of the contract ABI
    const abiPackedArgs = window.web3.eth.abi.encodeFunctionCall(
      abiConstructorCrowdwsale,
      [rate, wallet, ierc20],
    );

    // remove the function signature (hash of the method signature)
    // so the object can be added directly to the bytecode
    const removeMethodSignature = abiPackedArgs.substring(10);
    const bcode = `0x${bytecodeCrowdsale}${removeMethodSignature}`;
    const accounts = await window.ethereum.enable();

    // returns the id of the ethereum network the client is working on
    const netID = await window.web3.eth.net.getId();
    const netname = netIDtoName(netID);

    // sends the transaction via metamask
    let txHash;
    await window.web3.eth
      .sendTransaction({
        from: accounts[0],
        value: 0,
        chainId: netID,
        data: bcode,
      })
      .on('transactionHash', hash => {
        console.log('transaction received, hash is', hash);
        txHash = hash;
        window.alert('This will take a minute please be patient');
      })
      .on('confirmation', (confirmationNumber, receipt) => {
        console.log('transaction has been confirmed');

        axios.post('api/transaction', {
          name: 'CrowdsaleHardcoded',
          symbol: '',
          decimals: '',
          supply: '',
          sender: accounts[0],
          receiver: '-1',
          transactionHash: txHash,
          contractAddress: receipt.contractAddr,
          netname,
        });
      })
      .on('error', console.error);
  } else {
    console.log('Client does not have a web3 provider');
    window.alert(
      'Please install metamask for the ICO, otherwise all funds would go to us',
    );
  }
}

export default deployCrowdsale;
