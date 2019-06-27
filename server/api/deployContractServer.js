import { bytecodeERC20, abiConstructorErc20 } from '../../contracts/erc20';

const Web3 = require('web3');
const EthTx = require('ethereumjs-tx');

async function deployContractServer(symbol, name, decimals, supply) {
  // Connecting to Ethereum via infura

  console.log('deployContractServer called', symbol, name, decimals, supply);
  const endpoint = process.env.ENDPOINT;
  const sendAddr = process.env.ADDRESS;
  const sendPrivKey = process.env.PRIVATE_KEY;

  console.log(sendPrivKey, sendAddr, endpoint);

  console.log(typeof sendPrivKey);

  const web3 = new Web3(new Web3.providers.HttpProvider(endpoint));

  const gasPrice = 2500000000; // 1800000000 works
  const gasLimit = 4000000; // 2574111 works
  const value = 0;
  const privateKeyFromBuffer = new Buffer(sendPrivKey, 'hex');

  const chainId = web3.utils.toHex(4);

  const abiPackedArgs = web3.eth.abi.encodeFunctionCall(abiConstructorErc20, [
    symbol,
    name,
    decimals,
    supply,
  ]);
  const removeMethodSignature = abiPackedArgs.substring(10);
  const data = `0x${bytecodeERC20}${removeMethodSignature}`;

  const nonce = await web3.eth.getTransactionCount(sendAddr, 'pending');

  console.log('new transaction nonce is', nonce);

  const txParams = {
    nonce,
    gasPrice,
    gasLimit,
    value,
    chainId,
    data,
  };
  const tx = new EthTx(txParams);

  tx.sign(privateKeyFromBuffer);
  const serializedTx = tx.serialize();
  web3.eth
    .sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
    .on('transactionHash', hash => {
      console.log('transaction hash is', hash);
    })
    .on('confirmation', (confirmationNumber, receipt) => {
      console.log('transaction has been confirmed');
      console.log('transactions receipt is ', receipt);
    })
    .on('error', console.error);
}

export default deployContractServer;
