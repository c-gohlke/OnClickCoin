import { abiTransferErc20 } from '../../contracts/erc20';
import getPermission from './getPermission';
import netIDtoName from './netIDtoName';
const axios = require('axios');
const Web3 = require('web3');

async function transferToken(contractAddr, receiveAddr, sendAmount, netID) {
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider.
    window.web3 = new Web3(window.ethereum);
    await getPermission();

    const data = window.web3.eth.abi.encodeFunctionCall(abiTransferErc20, [
      receiveAddr,
      sendAmount,
    ]);

    const accounts = await window.ethereum.enable();
    const networkID = await window.web3.eth.net.getId();
    const netname = netIDtoName(networkID);

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

        // todo: remove hardcoded name
        axios.post('api/transaction', {
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
    const netname = netIDtoName(netID);

    axios.post('api/transfer-token', {
      contractAddr,
      receiveAddr,
      sendAmount,
      netname,
    });
  }
}

export default transferToken;
