import { abiTransferErc20 } from '../../contracts/erc20';
import getPermission from './getPermission';
const axios = require('axios');

const Web3 = require('web3');

async function transferToken(contractAddr, receiveAddr, sendAmount) {
  // TODO: move folder somewhere else. This happens client-side
  if (typeof web3 !== 'undefined') {
    // TODO: add db entries

    // Use Mist/MetaMask's provider.
    window.web3 = new Web3(window.ethereum);

    // gets permission from metamask to access accounts and other info
    await getPermission();

    // Create the data for the transfer transaction encoding the
    // arguments of the transfer function with the transfer item of the contract ABI
    const data = window.web3.eth.abi.encodeFunctionCall(abiTransferErc20, [
      receiveAddr,
      sendAmount,
    ]);

    const accounts = await window.ethereum.enable();

    // returns the id of the ethereum network the client is working on
    const netID = await window.web3.eth.net.getId();

    await window.web3.eth
      .sendTransaction({
        from: accounts[0],
        to: contractAddr,
        value: 0,
        chainId: netID,
        data,
      })
      .on('transactionHash', hash => {
        console.log('transaction received, hash is', hash);
      })
      .on('receipt', receipt => {
        console.log('receipt info is', receipt);
      });
  }
  // when the client does not have metamask, go through infura http provider
  else {
    console.log('Client does not have a web3 provider');
    window.alert(
      'It seems you do not have a web3 provider installed. To be able to safely deploy your smart contracts/create your own ERC-20 token, it is recommended you download metamask. Visit info page for more information',
    );
    // TODO: don't hardcode rinkeby
    const netname = 'rinkeby';

    axios.post('/transfer-token', {
      contractAddr,
      receiveAddr,
      sendAmount,
      netname,
    });
  }
}

export default transferToken;
