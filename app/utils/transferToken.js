import { abiTransferErc20 } from '../../contracts/erc20';
import getPermission from './getPermission';
import netIDtoName from './netIDtoName';
import history from './history';
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

    await window.web3.eth
      .sendTransaction({
        from: accounts[0],
        to: contractAddr,
        value: 0,
        chainId: networkID,
        data,
      })
      .once('transactionHash', hash => {
        console.log('transaction received, hash is', hash);
      })

      .once('confirmation', (confirmationNumber, receipt) => {
        console.log('transaction has been confirmed');
        axios
          .post('/api/transaction', {
            sender: accounts[0],
            receiver: receiveAddr,
            amount: sendAmount,
            txHash: receipt.transactionHash,
            contractAddr,
            netname,
          })
          .then(
            history.push(`/receipt/transaction/${receipt.transactionHash}`),
          );
      });
  }
  // when the client does not have metamask, go through infura http provider
  else {
    console.log('Client does not have a web3 provider');
    const netname = netIDtoName(netID);

    axios
      .post('/api/transfer-token', {
        contractAddr,
        receiveAddr,
        sendAmount,
        netname,
      })
      .then(function redirect(response) {
        console.log('transaction confirmed');
        history.push(`/receipt/transaction/${response.data.txHash}`);
      });
  }
}

export default transferToken;
