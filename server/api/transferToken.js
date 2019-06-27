import { abiTransferErc20 } from '../../contracts/erc20';
import getPermission from './getPermission';

const Web3 = require('web3');
const EthTx = require('ethereumjs-tx');

async function transferToken(contractAddr, receiveAddr, sendAmount) {
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
  } else {
    console.log('Client does not have a web3 provider');
    window.alert(
      'It seems you do not have a web3 provider installed. To be able to safely deploy your smart contracts/create your own ERC-20 token, it is recommended you download metamask. Visit info page for more information',
    );

    const endpoint = process.env.ENDPOINT;
    const sendAddr = process.env.ADDRESS;
    const sendPrivKey = process.env.PRIVATE_KEY;

    // Connecting to Ethereum via infura
    window.web3 = new Web3(new Web3.providers.HttpProvider(endpoint));

    const gasPrice = 2500000000; // 1800000000 works
    const gasLimit = 4000000; // 2574111 works

    const privateKeyFromBuffer = new Buffer(sendPrivKey, 'hex');

    const chainId = window.web3.utils.toHex(4);

    const value = 0;
    const data = window.web3.eth.abi.encodeFunctionCall(abiTransferErc20, [
      receiveAddr,
      sendAmount,
    ]);

    const nonce = await window.web3.eth.getTransactionCount(
      sendAddr,
      'pending',
    );

    const tx = await new EthTx({
      nonce,
      gasPrice,
      gasLimit,
      to: contractAddr,
      value,
      chainId,
      data,
    });

    tx.sign(privateKeyFromBuffer);
    const serializedTx = tx.serialize();
    window.web3.eth
      .sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
      .on('transactionHash', hash => {
        console.log('transaction received, hash is', hash);
      })
      .on('receipt', receipt => {
        console.log('receipt info is', receipt);
      });
  }
}

export default transferToken;
