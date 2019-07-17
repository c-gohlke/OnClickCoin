import { abiTransferErc20 } from '../../contracts/erc20';
import getPermission from './getPermission';
const axios = require('axios');

const Web3 = require('web3');

async function transferToken(contractAddr, receiveAddr, sendAmount, netID) {
  // TODO: move folder somewhere else. This happens client-side
  if (typeof web3 !== 'undefined') {
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
    const networkID = await window.web3.eth.net.getId();

    let netname;
    switch (networkID) {
      case '1':
        netname = 'mainnet';
        break;
      case '2':
        netname = 'morden';
        break;
      case '3':
        netname = 'ropsten';
        break;
      case 4:
        netname = 'rinkeby';
        break;
      case '42':
        netname = 'kovan';
        break;
      default:
        netname = 'Unknown';
    }

    let txHash;
    await window.web3.eth
      .sendTransaction({
        from: accounts[0],
        to: contractAddr,
        value: 0,
        chainId: networkID,
        data,
      })
      .on('transactionHash', hash => {
        console.log('transaction received, hash is', hash);
        txHash = hash;

        axios.post('/transaction', {
          name: 'sendTransaction',
          symbol: 'sendTransaction',
          decimals: -1,
          supply: -1,
          sender: accounts[0],
          receiver: receiveAddr,
          transactionHash: txHash,
          contractAddress: contractAddr,
          netname,
        });
      });
  }
  // when the client does not have metamask, go through infura http provider
  else {
    console.log('Client does not have a web3 provider');
    window.alert(
      'It seems you do not have a web3 provider installed. To be able to safely deploy your smart contracts/create your own ERC-20 token, it is recommended you download metamask. Visit info page for more information',
    );
    let netname;
    switch (netID) {
      case 1:
        netname = 'mainnet';
        break;
      case 2:
        netname = 'morden';
        break;
      case 3:
        netname = 'ropsten';
        break;
      case 4:
        netname = 'rinkeby';
        break;
      case 42:
        netname = 'kovan';
        break;
      default:
        netname = 'Unknown';
    }
    axios.post('/transfer-token', {
      contractAddr,
      receiveAddr,
      sendAmount,
      netname,
    });
  }
}

export default transferToken;
